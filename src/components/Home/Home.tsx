import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {Test} from "../../@types/test.type";
import {auth, firestore, logout} from "../../firebase/config";
import Spinner from "../Spinner/Spinner";
import {TestBox} from "../TestBox/TestBox";
import {Transition } from "react-transition-group";
import "./Home.scss";
import FlipMove from "react-flip-move";


const filterOptions = [
	{
		name: "Svi testovi",
		value: "all"
	},
	{
		name: "Moji testovi",
		value: "my"
	},
	{
		name: "Nedovršeni",
		value: "drafts"
	}
]


const Home = () => {


	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);
	const [data, setData] = useState<Test[]>([]);
	const [pending, setPending] = useState(false);
	const [filter, setFilter] = useState("all");
	const [filtered, setFiltered] = useState<Test[] | null>(null);


	const getAllData = async () => {

		const querySnapshot = await getDocs(collection(firestore, "tests"));
		let results: Test[] = []
		querySnapshot.docs.map((doc) => results.push({id: doc.id, ...doc.data()}));

		return results;

	};


	const filterDrafts = (results: Array<Test>, drafted = true) => {
		return results.filter(item => item.draft !== drafted)
	}

	const filterUser = (results: Array<Test>) => {
		return results.filter(item => item.user === user?.uid)
	}

	const handleFilter = (e: any) => {

		setFilter(e.target.value)

	}


	useEffect(() => {
		setPending(true)
		getAllData().then(response => {
			setData(response)
			setFiltered(filterDrafts(response))
			setPending(false)
		});
	}, []);


	useEffect(() => {


		if (filter === "all") setFiltered(filterDrafts(data))
		if (filter === "my") setFiltered(filterUser(data))
		if (filter === "drafts") setFiltered(filterDrafts(data, false))

	}, [filter, setFilter])

	useEffect(() => {
		if (loading) return;
	}, [user, loading]);


	return (
		<div className="Home">
			{loading && (
				<Spinner/>
			)}
			{pending && (
				<Spinner/>
			)}
			<div className="navbar">
				<div className="heading">
					<h1>Persona</h1>
					<p>UPOZNAJ SEBE</p>
				</div>

				<div className="nav-items">
					{user && (
						<ul className="item-container">

							<li className="icon">
								<FontAwesomeIcon icon={faUser}/>
							</li>
							<li className="item">
								{user.email}
							</li>
							<li className="item" onClick={() => {
								logout()
							}}>
								Izloguj se
							</li>
						</ul>
					)}
					{!user && (
						<ul className="item-container">

							<li className="item" onClick={() => navigate("/login")}>
								Uloguj se
							</li>
							<li className="item" onClick={() => navigate("/register")}>
								Registruj se
							</li>
						</ul>
					)}

				</div>
			</div>
			{user && (
				<div className="filter">
					<ul className="filter-items">
						{filterOptions.map((item, index) => (
							<button
								key={index}
								value={item.value}
								className={`${filter === item.value ? 'active' : ''}`}
								onClick={handleFilter}
							>
								{item.name}
							</button>
						))}

					</ul>
				</div>
			)}


			<div className="tests">

				{filtered && filtered.map(item => (
					<TestBox key={item.id} test={item}></TestBox>
				))}

				{user && (
					<TestBox empty/>
				)}
			</div>
		</div>
	)
}


export default Home;

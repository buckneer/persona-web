import "./TestResults.scss";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {firestore} from "../../../firebase/config";
import {ResultDoc} from "../../../@types/test.type";


function TestResults() {

	const { docId } = useParams<{ docId: string }>();
	const [added, setAdded] = useState(0);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const resetFields = () => {
		setName("");
		setDesc("");
		setAdded(added => added + 1);
	}


	const handleFinish = () => {
	//	Go to next step
		navigate("/");
	}

	const removeFromDrafts = async () => {
		const docRef = doc(firestore, `tests/${docId}`);

		const docSnap = await getDoc(docRef);

		const data = docSnap.data();
		await updateDoc(docRef, {...data, draft: false})
	}

	const handleSave = async () => {

		const q = query(collection(firestore, "results"), where("testId", "==", docId));
		const qDocs = await getDocs(q);

		if (qDocs.empty) {
			let newDoc: ResultDoc = {
				testId: docId!,
				results: [
					{ name, desc}
				]
			}

			await addDoc(collection(firestore, "results"), newDoc);
		} else {
			const docRef = doc(firestore, "results", qDocs.docs[0].id);

			const docSnapshot = await getDoc(docRef);
			const data = docSnapshot.data();

			data?.results.push({name, desc});
			await updateDoc(docRef, data!);
		}

		await removeFromDrafts();
		resetFields();
	}




	return (
		<div className="TestResults">
			<div className="heading">
				<h1>Rezultati testa</h1>
			</div>
			<div className="results-container">
				<div className="results-field">
					<input type="text" placeholder="Tip"
					       value={name}
					       onChange={(e: any) => setName(e.target.value.toUpperCase())} />

				</div>
				<div className="results-field">
					<textarea placeholder="Opis tipa"
					          value={desc}
					          onChange={(e: any) => setDesc(e.target.value)} />
				</div>
			</div>

			<div className="button-container">
				<div className="button secondary" onClick={handleSave}>
					Sačuvaj rezultat
				</div>
				{added >= 1 && (
					<div className="button secondary" onClick={handleFinish}>
						Završi
					</div>
				)}

			</div>

		</div>
	);
}

export default TestResults;

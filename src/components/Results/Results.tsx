import "./Results.scss";
import bg from "../../assets/bg.jpg";
import {useLocation} from "react-router-dom";
import {collection, getDoc, getDocs, query, where} from "firebase/firestore";
import {firestore} from "../../firebase/config";
import {useEffect, useState} from "react";
import {DimensionDoc, Scale} from "../../@types/test.type";

type ScaleResult = {
	scale: string,
	totalPoints: number
}


function Results() {

	const location = useLocation();

	const answers = location.state?.answers;
	const docId = location.state?.docId;
	const [scale, setScale] = useState<Scale[]>([]);
	const [results, setResults] = useState<ScaleResult[]>([]);
	const [resultLetter, setResultLetter] = useState<string[]>([]);
	const [dimen, setDimen] = useState<DimensionDoc>();

	const getQuestions = () => {

	}

	const isolateQuestions = (dimensions: DimensionDoc) => {
		dimensions.dimensions?.map(item => {
			scale.push(...item.scales)
			setScale(scale);
		})
	}

	const getDimensions = async () => {


		const q = query(collection(firestore, "dimensions"),
			where("testId", "==", docId))
		// const q = query(collection(firestore, "dimensions"),
		// 			where("testId", "==", "OKq7kdiJ39p0jNsuqe2J"))

		const qDocs = await getDocs(q);

		const dimensions: DimensionDoc = {
			id: qDocs.docs[0].id, ...qDocs.docs[0].data()
		};


		return dimensions;

	}

	const handleDownload = async () => {

		getDimensions().then(response => {
			checkAnswers(response)
		})


	}

	const checkAnswers = async (dimen: any) => {

		// @ts-ignore
		dimen?.dimensions?.map(item => {
			let indexes = Object.keys(item)
			const scaleSum: number[] = []
			indexes.map(index => {
				let sum = 0;
				item[index].questions.map((question: number) => {
					if (answers[question - 1] !== undefined)
						sum += answers[question - 1]
				})
				scaleSum.push(sum)
			})
			let scaleInd = scaleSum.indexOf(Math.max(...scaleSum));
			let scaleName = item[scaleInd].name;
			resultLetter.push(scaleName);
			setResultLetter(resultLetter);
		})
		console.log(resultLetter)
	}

	useEffect(() => {


		// console.log(scale)
	}, [])

	return (
		<div className="Results">
			<div className="container">
				<div className="result-type">
					<h1>INTP</h1>
				</div>
				<div className="type-description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et iaculis urna, eu sodales sem. Curabitur ut ipsum risus. Aenean interdum justo ex, ultricies porttitor dolor rhoncus eget. Aenean ut fringilla enim. Cras ut mi in est efficitur tempor at nec eros. Vivamus et eleifend neque, vel ornare ligula. Vivamus id nulla in nunc aliquet vehicula facilisis dictum quam. Cras sagittis lobortis mi, et tempor mauris rutrum malesuada. Curabitur mollis arcu et nisl rutrum, eget cursus risus ultricies. Integer vehicula elit sed mi faucibus, vel fermentum orci lobortis. Suspendisse tincidunt gravida nisl non hendrerit. Sed tristique sit amet odio a iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla varius accumsan. Pellentesque nisi diam, facilisis id felis sed, facilisis elementum risus. Pellentesque scelerisque non ligula et laoreet.

						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in mauris sollicitudin, ornare eros iaculis, porta libero. Duis id egestas nibh. Sed ut imperdiet nisi, in ultricies ligula. Maecenas in quam quam. Curabitur dapibus commodo risus in congue. Donec quis varius purus, ut tempus turpis. Suspendisse potenti. Suspendisse maximus turpis vel sapien semper bibendum.
					</p>
				</div>

				<div className="button-container">
					<div className="button secondary" onClick={handleDownload}>
						Skini PDF
					</div>
				</div>
			</div>

		</div>
	);
}

export default Results;

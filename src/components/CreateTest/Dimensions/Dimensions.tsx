import "./Dimensions.scss";
import DimensionsBox from "../../DimensionsBox/DimensionsBox";
import {useState} from "react";
import {Dimension, Scale} from "../../../@types/test.type";
import {useNavigate, useParams} from "react-router-dom";
import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {firestore} from "../../../firebase/config";



export const Dimensions = () => {

	const { docId } = useParams<{ docId: string }>();

	const [dimenCount, setDimenCount] = useState(1);
	const [dimen, setDimen] = useState<Dimension[]>([]);
	const [addedScales, setAddedScales] = useState(0);
	const navigate = useNavigate();



	const handleAddDimension = () => {
		setDimenCount(dimenCount + 1);
	}

	const handleRemoveDimension = () => {
		setDimenCount(dimenCount - 1);
	}


	const saveScale = async (scales: Scale[]) => {


		const q = query(collection(firestore, "dimensions"), where("testId","==", docId));
		const qDocs = await getDocs(q);

		if (qDocs.empty) {
			// create new
			await addDoc(collection(firestore, "dimensions"), {
				testId: docId,
				dimensions: [
					{...scales}
				]
			})
		} else {
			// append the existing
			const docRef = doc(firestore, 'dimensions', qDocs.docs[0].id);
			const docSnapshot = await getDoc(docRef);
			const data = docSnapshot.data();

			data?.dimensions.push({...scales});

			await updateDoc(docRef, data);
		}
		setAddedScales(scales => scales + 1);
	}


	const handleFinish = () => {
		navigate(`/new/results/${docId}`);
	}




	return (
		<div className="Dimensions">

			<div className="box-container">

				<div className="heading">
					<h1>Dimenzije</h1>
				</div>

				<DimensionsBox saveScale={saveScale}  />


				{addedScales >= 1 && (
					<div className="button-container" onClick={handleFinish}>

						<div className="button secondary">
							Gotovo
						</div>

					</div>
				)}
			</div>

		</div>
	)
}

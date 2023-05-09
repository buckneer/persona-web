import "./Results.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {getKeys} from "../../data/data";
import {Dimension, Scale} from "../../data/types";
import {useEffect, useState} from "react";

type ScaleResult = {
	scale: string,
	totalPoints: number
}


function Results() {

	const location = useLocation();
	const navigate = useNavigate();

	const answers = location.state?.answers;

	const [letters, setLetters] = useState<string>();


	const handleDownload = () => {
		navigate("/")
	}

	const allEqual = (arr: Array<number>) => arr.every(val => val === arr[0]);

	const calculateLetter = (scaleSum: number[]) => {
		if (allEqual(scaleSum)) {
		//	handle if the scale result is equal
		} else {
		//	not equal ... duh
		}

		return scaleSum.indexOf(Math.max(...scaleSum));
	}

	const calculateAnswers = async () => {
		let results : string[] = []
		getKeys().map((item: Dimension) => {
			const scaleSum: number[] = []
			item.scales.map((scale: Scale) => {
				let sum = 0;
				scale.questions.map((question: number) => {
					sum += answers[question - 1];
				})
				scaleSum.push(sum);
			})
			let ind = calculateLetter(scaleSum);
			results.push(item.scales[ind].name);

		})

		return results;
	}


	useEffect(() => {
		calculateAnswers().then(response => {
			setLetters(response.join(""));
		})
	});


	return (
		<div className="Results">
			<div className="container">
				<div className="result-type">
					{letters && (
						<h1>{letters}</h1>
					)}

				</div>
				<div className="type-description">
					<p>

					</p>
				</div>

				<div className="button-container">
					<div className="dark-button" onClick={handleDownload}>
						Idi na početak
					</div>
				</div>
			</div>

		</div>
	);
}

export default Results;

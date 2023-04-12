import "./Results.scss";
import {useLocation} from "react-router-dom";
import {getKeys} from "../../data/data";
import {Dimension, Scale} from "../../data/types";
import {useState} from "react";

type ScaleResult = {
	scale: string,
	totalPoints: number
}


function Results() {

	const location = useLocation();

	const answers = location.state?.answers;

	const [letters, setLetters] = useState<string[]>([]);


	const handleDownload = () => {
		calculateAnswers();
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

	const calculateAnswers = () => {
		getKeys().map((item: Dimension) => {
			const scaleSum: number[] = []
			item.scales.map((scale: Scale) => {
				let sum = 0;
				scale.questions.map((question: number) => {
					sum += answers[question];
				})
				scaleSum.push(sum);
			})
			let ind = calculateLetter(scaleSum);
			letters.push(item.scales[ind].name);
			setLetters(letters);
		})
	}




	return (
		<div className="Results">
			<div className="container">
				<div className="result-type">
					{letters && (
						<h1>{letters.toString().replace(",","")}</h1>
					)}

				</div>
				<div className="type-description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et iaculis urna, eu sodales sem. Curabitur ut ipsum risus. Aenean interdum justo ex, ultricies porttitor dolor rhoncus eget. Aenean ut fringilla enim. Cras ut mi in est efficitur tempor at nec eros. Vivamus et eleifend neque, vel ornare ligula. Vivamus id nulla in nunc aliquet vehicula facilisis dictum quam. Cras sagittis lobortis mi, et tempor mauris rutrum malesuada. Curabitur mollis arcu et nisl rutrum, eget cursus risus ultricies. Integer vehicula elit sed mi faucibus, vel fermentum orci lobortis. Suspendisse tincidunt gravida nisl non hendrerit. Sed tristique sit amet odio a iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla varius accumsan. Pellentesque nisi diam, facilisis id felis sed, facilisis elementum risus. Pellentesque scelerisque non ligula et laoreet.

						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in mauris sollicitudin, ornare eros iaculis, porta libero. Duis id egestas nibh. Sed ut imperdiet nisi, in ultricies ligula. Maecenas in quam quam. Curabitur dapibus commodo risus in congue. Donec quis varius purus, ut tempus turpis. Suspendisse potenti. Suspendisse maximus turpis vel sapien semper bibendum.
					</p>
				</div>

				<div className="button-container">
					<div className="dark-button" onClick={handleDownload}>
						Skini PDF
					</div>
				</div>
			</div>

		</div>
	);
}

export default Results;

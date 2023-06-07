import "./Results.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getKeys } from "../../data/data";
import { Dimension, Scale } from "../../data/types";
import { useEffect, useState } from "react";
import '../../data/templates';
import {
	INTPDesc, ENTPDesc, ISTPDesc, ESTPDesc, ISTJDesc, ESTJDesc,
	INFJDesc, INFPDesc, ENFJDesc, ENFPDesc, ENTJDesc, ESFJDesc,
	INTJDesc, ISFJDesc, ISFPDesc, ESFPDesc
} from "../../data/templates";

type ScaleResult = {
	scale: string,
	totalPoints: number
}

function Results() {

	const location = useLocation();
	const navigate = useNavigate();

	const answers = location.state?.answers;

	const [letters, setLetters] = useState<string>();
	const [x, setX] = useState<any>([]);

	const handleDownload = () => {
		navigate("/")
	}

	const allEqual = (arr: number[]) => arr.every(val => val === arr[0]);

	const calculateLetter = (scaleSum: number[]) => (allEqual(scaleSum)) ? -1 : scaleSum.indexOf(Math.max(...scaleSum));

	const getDescByLetters = (letter = letters) => {
		switch (letter) {
			case "INTP":
				return <INTPDesc />
			case "ENTP":
				return <ENTPDesc />
			case "ISTP":
				return <ISTPDesc />
			case "ESTP":
				return <ESTPDesc />
			case "ISTJ":
				return <ISTJDesc />
			case "ESTJ":
				return <ESTJDesc />
			case "INFP":
				return <INFPDesc />
			case "ENFJ":
				return <ENFJDesc />
			case "INFJ":
				return <INFJDesc />
			case "ENFP":
				return <ENFPDesc />
			case "INTJ":
				return <INTJDesc />
			case "ISFJ":
				return <ISFJDesc />
			case "ISFP":
				return <ISFPDesc />
			case "ESFPDesc":
				return <ESFPDesc />
			case "ENTJ":
				return <ENTJDesc />
			case "ESFJDesc":
				return <ESFJDesc />

		}
	}

	const calculateAnswers = async () => {
		let results: string[] = []
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

			if (ind === -1) {
				results.push('X');
			} else {
				results.push(item.scales[ind].name);
			}
		})

		return results;
	}

	const getAllCombs = (input: any, output: any, position: any = 0, path: any = []) => {
    if (position < input.length) {
        let item = input[position];
        for (let i = 0; i < item.length; ++i) {
            var value = item[i];
            path.push(value);
            getAllCombs(input, output, position + 1, path);
            path.pop();
        }
    } else {
      	output.push(path.slice());
    }
};


	useEffect(() => {
		calculateAnswers().then(response => {
			setLetters(response.join(""));

			if (letters?.includes("X")) {
				let compsToConsider = [];
				let combinations = [['I', 'E'], ['N', 'S'], ['F', 'T'], ['P', 'J']];

				for (let i = 0; i < combinations.length; i++) {
					(letters.charAt(i) === 'X') ? compsToConsider.push(combinations[i]) : compsToConsider.push([letters.charAt(i)]);
				}

				let resultArrayCombs: any = [];

				getAllCombs(compsToConsider, resultArrayCombs);

				setX(resultArrayCombs);

			}

		})
	});

	function replaceAt(originalString: string, index: number, replacement: string) {
		return originalString.substring(0, index) + replacement + originalString.substring(index + replacement.length);
	}

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
						{!letters?.includes('X') && getDescByLetters()}
					</p>
					{letters?.includes("X") && (
						<div className="choose-type">
							{x.map(function(item: any) {
								return (
									<div className="dark-button" key={item.join('')}>
										{item.join('')}
									</div>
									)
							}
							)}
						</div>
					)}
				</div>

				<div className="type-description">

					
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

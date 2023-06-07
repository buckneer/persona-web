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
	const [x, setX] = useState<string[]>();
	const [displayX, setDisplayX] = useState(false);

	const [element, setElement] = useState("");
	const [loading, setLoading] = useState(true);

	const handleDownload = () => {
		navigate("/")
	}

	const allEqual = (arr: number[]) => arr.every(val => val === arr[0]);

	const calculateLetter = (scaleSum: number[]) => (allEqual(scaleSum)) ? -1 : scaleSum.indexOf(Math.max(...scaleSum));

	const getDescByLetters = (manLetters = letters) => {
		switch (manLetters) {
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
			case "ESFP":
				return <ESFPDesc />
			case "ENTJ":
				return <ENTJDesc />
			case "ESFJ":
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

	async function generateCombinations(arr : any) {
		const combinations: any = [];

		async function helper(currentCombo: any, remainingArrays: any) {
			if (remainingArrays.length === 0) {
				combinations.push(currentCombo);
			} else {
				const currentArray = remainingArrays[0];
				for (const element of currentArray) {
					await helper([...currentCombo, element], remainingArrays.slice(1));
				}
			}
		}

		await helper([], arr);
		return combinations;
	}


	const handleExes = () => {
		setDisplayX(true);
	}


	useEffect(() => {
		setLoading(true)
		console.log("Use effect")
		calculateAnswers().then(response => {
			let res = response.join("");
			setLetters(res);

			if (res.includes("X")) {
				console.log("Running")
				let compsToConsider = [];
				let combinations = [['I', 'E'], ['N', 'S'], ['F', 'T'], ['P', 'J']];

				for (let i = 0; i < combinations.length; i++) {
					(res.charAt(i) === 'X') ? compsToConsider.push(combinations[i]) : compsToConsider.push([res.charAt(i)]);
				}
				generateCombinations(compsToConsider)
					.then(result => {
						setX(result)
						console.log(result);
						setLoading(false); // Set loading to false once letters are retrieved
					});



			} else {
				setLoading(false); // Set loading to false once letters are retrieved
			}



		})
	}, []);




	if (loading) {
		return <div>Loading...</div>;
	}


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
				</div>
				<div className="hasX">

					{letters && letters?.includes("X") && (
						<div className="choose-type">
							{x?.map(function(item: any) {
									return (
										<div className="dark-button" key={item.join('')} onClick={() => setElement(item.join(""))}>
											{item.join('')}
										</div>
									)
								}
							)}
						</div>
					)}
				</div>

				{element && (
					<div className="type-description">
						{getDescByLetters(element)}
					</div>
				)}
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

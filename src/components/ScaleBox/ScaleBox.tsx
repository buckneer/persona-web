import "./ScaleBox.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";


interface ScaleBoxProps {
	onInputChange: (name: string, questions: Array<number>) => void;
	clearScale?: boolean,
	resetClear?: () => void
}




function ScaleBox({onInputChange, clearScale, resetClear} : ScaleBoxProps) {

	const [name, setName] = useState("");
	const [questions, setQuestions] = useState("");
	const [separatedQuestions, setSeparatedQuestions] = useState<number[]>([]);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
		onInputChange(event.target.value, separatedQuestions);
	};


	const convertToNumbers = (questions: string) => {
		const cleared = questions.replace(/\s/g, '');
		const separated = cleared.split(',');

		return separated.map(str => {
			return parseInt(str, 10);
		});
	}

	const handleQuestionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuestions(event.target.value);
		setSeparatedQuestions(convertToNumbers(event.target.value))
		onInputChange(name, convertToNumbers(event.target.value));
	};

	useEffect(() => {
		if (clearScale === true) {
			setSeparatedQuestions([]);
			setQuestions("");
			setName("");
			resetClear!()
		}
	}, [clearScale])


	return (
		<div className="ScaleBox">

			<div className="input-container">
				<input
					className="input-name"
					type="text"
					placeholder="Slovo skale"
					value={name}
					onChange={handleNameChange}
				/>
				<input
					className="input-questions"
					type="text"
					placeholder="Br. Pitanja iz testa (odvojena zarezom)"
					value={questions}
					onChange={handleQuestionsChange}
				/>
			</div>
		</div>
	);
}

export default ScaleBox;

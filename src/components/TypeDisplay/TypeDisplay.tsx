import "./TypeDisplay.scss";
import Chart from "../Chart/Chart";
import {useNavigate, useParams} from "react-router-dom";
import {
	ENFJDesc, ENFPDesc, ENTJDesc,
	ENTPDesc, ESFJDesc, ESFPDesc,
	ESTJDesc,
	ESTPDesc,
	INFJDesc,
	INFPDesc, INTJDesc,
	INTPDesc, ISFJDesc, ISFPDesc,
	ISTJDesc,
	ISTPDesc
} from "../../data/templates";


function TypeDisplay() {

	let {type} = useParams()
	let navigate = useNavigate();

	const getDescByLetters = (typeMain: string) => {
		switch (typeMain) {
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

	return (
		<div className="TypeDisplay">
			<div className="container">
				<div className="result-type">
					<h1>{type}</h1>
				</div>
				<div className="type-description">
					<p>
						{type && getDescByLetters(type)}
					</p>
				</div>
				<div className="hasX">

				</div>

				<div className="button-container">

					<div className="dark-button" onClick={() => navigate("/")}>
						Idi na početak
					</div>

				</div>


			</div>


		</div>
	);
}

export default TypeDisplay;

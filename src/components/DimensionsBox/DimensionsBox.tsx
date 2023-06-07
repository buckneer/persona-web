import "./DimensionsBox.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faX} from "@fortawesome/free-solid-svg-icons";
import ScaleBox from "../ScaleBox/ScaleBox";
import {useState} from "react";
import {Scale} from "../../@types/test.type";


export interface DimensionsBoxProps {
	empty?: boolean,
	addDimen?: () => void;
	saveScale?: (scaleValues: Scale[]) => void;
}

function DimensionsBox({empty, addDimen, saveScale} : DimensionsBoxProps) {

	const [numScales, setNumScales] = useState(1);
	const [scaleValues, setScaleValues] = useState<Scale[]>([]);
	const [clear, setClear] = useState(false);


	const handleAddScale = () => {
		setNumScales(numScales + 1);
	};

	const handleRemoveScale = () => {
		setNumScales(numScales - 1);
	}

	const resetClear = () => {
		setClear(false);
	}


	const handleSave = () => {
		saveScale!(scaleValues)
		setClear(true);
	}

	const handleScaleInputChange = (index: number, name: string, questions: number[]) => {
		const newScaleValues = [...scaleValues];
		newScaleValues[index] = { name, questions };
		setScaleValues(newScaleValues);

	};

	return (
		<div className="DimensionsBox">

			{empty && (
				<div className="empty-container" onClick={addDimen}>
					<h1>Nova Dimenzija</h1>

					<div className="icon-wrapper">
						<div className="icon-container" >
							<FontAwesomeIcon icon={faPlus}/>
						</div>
					</div>
				</div>
			)}

			{!empty && (
				<div className="container">


					{[...Array(numScales)].map((_, index) => (
						<ScaleBox
							key={index}
							clearScale={clear}
							resetClear={resetClear}
							onInputChange={(name, questions) =>
								handleScaleInputChange(index, name, questions)
							}
						/>
					))}

					<div className="add-container">
						{numScales > 1 && (
							<FontAwesomeIcon size="2x" icon={faMinus} onClick={handleRemoveScale} />
						) }

						<FontAwesomeIcon size="2x" icon={faPlus} onClick={handleAddScale} />
					</div>

					<div className="button-container">
						<div className="button secondary" onClick={() => handleSave()}>
							Sačuvaj skalu
						</div>
					</div>
				</div>
			)}

        </div>
	);
}

export default DimensionsBox;

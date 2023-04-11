import "./TestBox.scss";
import image from "../../assets/personality.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {Test} from "../../@types/test.type";

export interface TestBoxProps {
    empty?: boolean,
    test?: Test
}


export const TestBox = ({empty, test} : TestBoxProps) => {

    const navigate = useNavigate();


    const handleNavigate = () => {
        if (test?.draft === false) {
            navigate(`test/${test?.id}`)
        } else {
            navigate(`/new/questions/${test?.id}`)
        }
    }


    return (
        <div
            className={`${empty ? 'EmptyTextBox' :  test?.color ? test.color + ' TestBox' : 'red TestBox'}`}>
            {!empty && (
                <div className="container" onClick={() => handleNavigate()}>
                    <img className="image-box" src={image}  />
                    <div className="text-wrapper">
                        <p>{ test?.allQuestions } pitanja</p>
                        <h1>{ test?.name }</h1>
                    </div>
                </div>
            )}

            {empty && (
                <div className="container" onClick={() => navigate("/new")}>
                    <h1>DODAJTE NOVI TEST</h1>
                    <div className="icon-wrapper">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

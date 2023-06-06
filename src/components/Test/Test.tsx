import "./Test.scss";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getQuestions} from "../../data/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';





function Test() {

    const [questions, setQuestions] = useState<string[]>();
    const [value, setValue] = useState(3);
    const [message, setMessage] = useState("I tačno i netačno");
    const [currQuestion, setCurrQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [firstQuestion, setFirstQuestion] = useState(true);
    const [lastQuestion, setLastQuestion] = useState(false);
    const navigate = useNavigate();

    const answerQuestion = () => {
        answers[currQuestion] = value;
        setAnswers(answers);
    }

    const handleNext = () => {
        answerQuestion()
        if (lastQuestion) {
            navigate("/test/results", {
                state: {
                    answers: answers
                }
            })
            return
        }
        setValue(3);
        setCurrQuestion(currQuestion + 1);
    }

    const handlePrev = () => {
        setCurrQuestion(currQuestion - 1);
        setValue(answers[currQuestion - 1])
    }

    useEffect(() => {
        setQuestions(getQuestions());
    }, []);


    useEffect(() => {
        if (currQuestion === 0) {
            setFirstQuestion(true)
        } else {
            setFirstQuestion(false);

            if(currQuestion === (questions!.length - 1)) {
                setLastQuestion(true);
            } else {
                setLastQuestion(false);
            }
        }
    }, [currQuestion]);

    const convertToText = (value: number) => {
        switch (value) {
            case 1:
                return "Potpuno netačno"
            case 2:
                return "Uglavnom netačno"
            case 3:
                return "I tačno i netačno"
            case 4:
                return "Uglavnom tačno"
            case 5:
                return "Potpuno tačno"
            default:
                return 'random'

        }
    }

    let handleChange = (e: any) => {
        setValue(parseInt(e.target.value));
    }

    useEffect(() => {
        setMessage(convertToText(value));
    }, [value])



    return (
        <div className="Test">

            <div className="container">

                {!firstQuestion && (
                    <div className="arrow">
                        <FontAwesomeIcon size="3x" icon={faChevronLeft} onClick={handlePrev}/>
                    </div>
                )}

                <div className="question-container">
                    {questions && (
                        <div className="progress-bar-container">
                            <CircularProgressbar
                                value={currQuestion}
                                maxValue={questions!.length - 1}
                                text={`${currQuestion + 1}`}
                                styles={{
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      stroke: "#015CC8"
                                    },
                                    text: {
                                        // Text color
                                        fill: '#015CC8',
                                        // Text size
                                        fontSize: '30px',
                                        fontFamily: "Inter",
                                        fontWeight: "bolder"
                                    },
                                }} />
                        </div>

                    )}
                    <div className="question">
                        <h1>{questions && questions[currQuestion]}</h1>
                    </div>
                    <div className="answer">
                        <div className="slider-container">
                            <input
                                className="slider"
                                type="range"
                                min={1}
                                max={5}
                                step={1}
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="answer-text">
                        <h3>{message}</h3>
                    </div>
                </div>
                <div className="arrow">
                    <FontAwesomeIcon size="3x" icon={faChevronRight} onClick={handleNext}/>
                </div>
            </div>

        </div>
     );
}

export default Test;

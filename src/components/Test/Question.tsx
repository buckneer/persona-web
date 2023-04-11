import "./Question.scss";
import image from "../../assets/questionSvg.svg"
import React, {ChangeEvent, useEffect, useState} from "react";
import {StepWizardChildProps} from "react-step-wizard";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';



export interface QuestionProps extends StepWizardChildProps {
    questionText: String,
    saveAnswer: (answer: number, lastQuestion: boolean) => void
}

const progressStyles = {

}

function Question({nextStep, questionText, saveAnswer, currentStep, totalSteps} : Partial<QuestionProps>) {

    const [value, setValue] = useState(3);
    const [message, setMessage] = useState("I tačno i netačno");
    const [lastQuestion, setLastQuestion] = useState(false);

    // Find if the current step is the last one
    useEffect(() => {
        setLastQuestion(currentStep === totalSteps);
    }, [currentStep]);



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

    let handleNext = () => {
        saveAnswer!(value, false)
        nextStep!()
    }

    const handleFinish = () => {
        saveAnswer!(value, true)
    }

    useEffect(() => {
        setMessage(convertToText(value));

    }, [value])

    return (
        <div className="Question">
            <div className="question-container">

                <div className="progress-bar-container">
                    <CircularProgressbar
                        value={currentStep!}
                        maxValue={totalSteps!}
                        text={`${currentStep!}`} styles={{
                        // Customize the path, i.e. the "completed progress"
                        path: {
                            // Path color
                            stroke: `#f0ffff`,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            // Rotate the path

                        },

                        trail: {
                            // Trail color
                            stroke: '#88c0fa',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Rotate the trail
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },

                        text: {
                            // Text color
                            fill: '#fff',
                            // Text size
                            fontSize: '30px',
                            fontFamily: "Inter",
                            fontWeight: "bolder"
                        },
                    }} />
                </div>

                <div className="img-container">
                    <img src={image} />
                </div>

                <div className="question-text">
                    <h1>{questionText}</h1>
                </div>

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

                <div className="question-text">
                    <h1>{message}</h1>
                </div>

                <div className="button-container">
                    {!lastQuestion && (
                        <div className="button secondary" onClick={handleNext}>Dalje</div>
                    )}

                    {lastQuestion && (
                        <div className="button secondary" onClick={handleFinish}>Pogledaj rezultate</div>
                    )}

                </div>
            </div>
        </div>
     );
}

export default Question;

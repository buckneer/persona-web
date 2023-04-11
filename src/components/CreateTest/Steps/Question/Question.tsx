import { useEffect, useState } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import "./Question.scss";
import {useNavigate} from "react-router-dom";


export interface QuestionProps extends StepWizardChildProps {
    num: number,
    allQuestions: number,
    questNumber: number,
    done: (questions: Array<string>, done?: boolean) => void,
}

function Question({num, nextStep, allQuestions, questNumber, done, currentStep, totalSteps}: Partial<QuestionProps>) {


    const [questions, setQuestions] = useState<string[]>([]);
    const [lastQuestion, setLastQuestion] = useState(currentStep === totalSteps);
    const navigate = useNavigate()

    // Find if the current step is the last one
    useEffect(() => {
        setLastQuestion(currentStep === totalSteps);
    }, [currentStep]);


    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };


    const handleNextQuestion = () => {
        done!(questions);
        // Next questions
        nextStep!()
    }

    const finish = () => {
        done!(questions, true);
    }





    const textareaElements = [];

  for (let i = 1; i <= num!; i++) {
        const textareaId = `question-${i}`;
        textareaElements.push(
            <div key={i} className="textarea-item">
                <label htmlFor={textareaId} className="question-label">
                    {`Pitanje ${questNumber! + i}/${allQuestions}`}
                </label>
                <textarea
                    id={textareaId}
                    value={questions[i - 1] || ""}
                    onChange={(e) => handleQuestionChange(i - 1, e.target.value)}
                />
            </div>
        );
    }

    return (
        <div className="Question-add">
            <div className="input-container">
                <div className="textarea-container">{textareaElements}</div>
            </div>
            <div className="button-container">
                {lastQuestion && (
                    <div className="button secondary" onClick={finish}>Završi</div>
                )}
                {!lastQuestion && (
                    <div className="button secondary" onClick={handleNextQuestion}>Dalje</div>
                )}

            </div>
        </div>
     );
}

export default Question;

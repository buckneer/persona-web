import "./Test.scss";
import {useNavigate, useParams} from "react-router-dom";
import StepWizard from "react-step-wizard";
import Question from "./Question";
import {collection, getDocs, query, where} from "firebase/firestore";
import {firestore} from "../../firebase/config";
import {useEffect, useState} from "react";
import {Questions} from "../../@types/test.type";
import Spinner from "../Spinner/Spinner";




function Test() {

    const { docId } = useParams<{ docId: string }>();
    const [questions, setQuestions] = useState<Questions>();
    const [loading, setLoading] = useState(false);
    const [answers, setAnswers] = useState<number[]>([]);
    const navigate = useNavigate();



    const getQuestions = async () => {

        const q = query(collection(firestore, "questions"), where("TestId", "==", docId))
        const qDocs = await getDocs(q);
        const doc = qDocs.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        }

    }




    const answerQuestion = (answer: number, last: boolean) => {

        setAnswers([
                ...answers,
                answer
            ]
        );

        if (last) {
            navigate("/test/results", {
                state: {
                    answers: [...answers],
                    docId: docId
                }
            });
        }

    }



    useEffect(() => {
        setLoading(true)
        getQuestions().then(response => {
            setQuestions(response);
            setLoading(false)
        })

    }, [])


    return (
        <div className="Test">
            {loading && (
                <Spinner />
            )}

            {!loading && (
                <StepWizard>
                    {questions && questions.questions?.map((item, index) => (
                        <Question key={index} questionText={item} saveAnswer={answerQuestion} />
                    ))}
                </StepWizard>
            )}

        </div>
     );
}

export default Test;

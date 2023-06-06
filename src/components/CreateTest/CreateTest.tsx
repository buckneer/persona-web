import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import StepWizard from "react-step-wizard";
import { firestore } from "../../firebase/config";
import Spinner from "../Spinner/Spinner";
import "./CreateTest.scss";
import Question from "./Steps/Question/Question";


export function CreateTest() {

    const { docId } = useParams<{ docId: string }>();
    const [components, setComponents] = useState<number[]>([]);
    const [doneQuestions, setDoneQuestions] = useState<number>(0);
    const [num, setNum] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function calculateComponentNumber(total: number, componentSize: number): number[] {
        const numComponents = Math.ceil(total / componentSize);
        const sizes = new Array(numComponents).fill(componentSize);
        const remainder = total % componentSize;
        if (remainder !== 0) {
          sizes[numComponents - 1] = remainder;
        }
        return sizes;
    }



    async function getTotalQuestions() {
        setLoading(true)
        try {

            const docRef = doc(firestore, `tests/${docId}`);
            const docSnap = await getDoc(docRef);
            setNum(docSnap.data()!.allQuestions);
            setLoading(false)

            let totalQuestions: number = docSnap.data()!.allQuestions;
            let addedQuestions : number = await getAddedQuestions();

            setDoneQuestions(addedQuestions);

            return totalQuestions - addedQuestions;


            // return ;

        } catch(err: any) {
            console.log(err);
            setLoading(false)
        }

    }


    async function getAddedQuestions() {
        setLoading(true);
        try {
            const q = query(collection(firestore, "questions"), where("TestId", "==", docId));
            const qDocs = await getDocs(q);

            if (!qDocs.empty) {
            //    There are questions in db
                const docRef = doc(firestore, 'questions', qDocs.docs[0].id);
                const docSnapshot = await getDoc(docRef);
                const data = docSnapshot.data();


                setLoading(false);
                return data?.questions.length;
            } else {
                setLoading(false);
                return 0;
            }



        } catch(err: any) {
            console.log(err);
            setLoading(false)
        }
    }

    async function saveQuestions(questions: string[], done?: boolean)  {

        try {

            const q = query(collection(firestore, "questions"), where("TestId", "==", docId));
            const qDocs = await getDocs(q);
            if(qDocs.empty) {
                // create new
                await addDoc(collection(firestore, `questions`), {
                    TestId: docId,
                    questions: [...questions]
                })
            } else {
                // update the questions

                const docRef = doc(firestore, 'questions', qDocs.docs[0].id);
                const docSnapshot = await getDoc(docRef);
                const data = docSnapshot.data();

                data?.questions.push(...questions);

                await updateDoc(docRef, data);

            }

        } catch(err: any) {
            console.log(err)
        }


        setDoneQuestions(prevState => prevState + questions.length);

        if (done) {
            navigate(`/new/dimensions/${docId}`)
        }

    }




    useEffect(() => {

        setLoading(true)
        getTotalQuestions().then(response => {
            if (response! === 0) {
                navigate(`/new/dimensions/${docId}`);

            }
            setComponents(calculateComponentNumber(response!, 10));
            setLoading(false);
        })


    }, [])


    return(
        <div className="CreateTest">
            {loading && (
                <Spinner />
            )}

            {!loading && (
                <StepWizard>
                    {components.map((item, index) => (
                        <Question key={index} num={item} allQuestions={num} questNumber={doneQuestions} done={saveQuestions}  />
                    ))}
                </StepWizard>
            )}
        </div>
    )
}

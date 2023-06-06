import "./Name.scss";
import { useEffect, useState } from "react";
import { TestBox } from "../../TestBox/TestBox";
import { StepWizardChildProps } from "react-step-wizard";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/config";
import Spinner from "../../Spinner/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";


const colors = ["red", "blue", "gray"]



function Name() {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [currColor, setCurrColor] = useState(0);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [docId, setDocId] = useState("");
    const [user, userLoading, error] = useAuthState(auth);

    useEffect(() => {
        setLoading(userLoading);
        if(!user) navigate("/");
    }, [user, loading])



    let changeColor = (curr: number) => {
        setCurrColor(curr);
    }

    const saveToFirestore = async () => {
        try {
            setLoading(true);
            const docRef = await addDoc(collection(firestore, "tests"), {
                draft: true,
                color: colors[currColor],
                allQuestions: parseInt(desc),
                name: name,
                user: user!.uid
            })
            setLoading(false);
            return docRef.id;

        } catch(err: any) {
            setLoading(false);
            console.log(err);
        }
    }

    let next = () => {

        saveToFirestore().then(response => {
            navigate(`/new/questions/${response}`);
        });

    }



    return (
        <div className="Name">
            {loading && (
                <Spinner />
            )}
            <div className="sample">
                <TestBox test={
                    {
                        name: name ? name : "Naslov",
                        allQuestions: parseInt(desc) ? parseInt(desc) : 10,
                        color: colors[currColor]
                    }
                } />
            </div>

            <div className="field-container">
                <div className="input-container">
                    <input type="text"
                        placeholder="Ime"
                        onChange={(e: any) => setName(e.target.value)}
                        value={name} />
                </div>
                <div className="input-container">
                    <input type="number"
                        placeholder="Ukupan broj pitanja"
                        onChange={(e: any) => setDesc(e.target.value)}
                        value={desc} />
                </div>
                <div className="input-container">
                    <div className="colors-container">
                        {colors.map((color, index) => (
                            <div className={`color ${color} ${index == currColor ? 'active' : ''}`} onClick={() => changeColor(index)} />
                        ))}
                    </div>
                </div>
               <div className="buttons-container">
                    <div className="button primary" onClick={next}>
                        Počni sa pitanjima
                    </div>
               </div>
            </div>
        </div>
     );
}

export default Name;

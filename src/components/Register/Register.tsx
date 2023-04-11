import { useEffect, useState } from "react";
import { auth, registerWithEmail } from "../../firebase/config";
import {useAuthState} from "react-firebase-hooks/auth";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Unesi ime");

        registerWithEmail(name, email, password);
    }

    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");

    }, [user, loading])
    

    return ( 
        <div className="Register">
            {loading && (
                <Spinner />
            )}

            
            <div className="container">
                <div className="heading">
                    <h1>Registracija</h1>
                </div>

                <div className="register-form">
                <input type="text"
                            placeholder="Ime"
                            onChange={(e: any) => setName(e.target.value)}
                            value={name} />
                    <input type="text"
                            placeholder="Email adresa"
                            onChange={(e: any) => setEmail(e.target.value)}
                            value={email} />
                    <input type="password"
                        placeholder="Lozinka"
                        onChange={(e: any) => setPassword(e.target.value)}
                        value={password} />
                </div>

                <div className="button-container">
                    <div className="button primary" onClick={register}> Registruj se </div>
                </div>
            </div>
        </div>
     );
}

export default Register;
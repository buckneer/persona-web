
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmail } from "../../firebase/config";
import Spinner from "../Spinner/Spinner";
import "./Login.scss";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const login = () => {
        

        logInWithEmail(email, password);
    }

    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");

    }, [user, loading])

    return ( 
        <div className="Login">
            {loading && (
                <Spinner />
            )}
            <div className="container">
                <div className="heading">
                    <h1>Login</h1>
                </div>

                <div className="login-form">
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
                    <div className="button primary" onClick={login}> Login </div>
                </div>
            </div>
        </div>
     );
}

export default Login;
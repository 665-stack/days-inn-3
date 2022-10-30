import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';
import { useState } from 'react';


const provider = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
        console.log(user);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    setUser(user)
                    setSuccessMsg("User logged")
                    setErrorMsg("")
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage) {
                    setErrorMsg(errorMessage)
                    setSuccessMsg("")
                    console.log(errorMessage);
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                if (user) {
                    setUser(user)
                    setSuccessMsg("User logged")
                    setErrorMsg("")
                }
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage) {
                    setErrorMsg(errorMessage)
                    setSuccessMsg("")
                    console.log(errorMessage);
                }
            })

    }
    return (
        <div className='auth-form-container'>
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <br />
                            <input onBlur={handleEmailBlur} className='input' type="email" name="email" id="email" />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input onBlur={handlePassword} className='input' type="password" name="password" id="password" />
                        </div>

                        <p className='form-error'>{errorMsg}</p>
                        <p className='form-success'>{successMsg}</p>

                        <button type="submit" className='
                    auth-form-submit'>
                            Login
                        </button>
                    </form>

                    <p className="redirect">
                        New to Days INN ? <span onClick={() => navigate("/register")}>Create new Account</span>
                    </p>

                    <div className='horizontal-divider'>
                        <div className='line-left'></div>
                        <p>or</p>
                        <div className="line-right"></div>
                    </div>

                    <button onClick={handleGoogleSignIn} className='google-auth'>Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;
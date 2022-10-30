import React from 'react';
import './Register.css'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();

const Register = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const navigate = useNavigate()

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate("/")
        console.log(user);
    }

    const handleCreateUser = (event) => {
        event.preventDefault()

        if (! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrorMsg('Invalid email')
            return;
        }
        if (password !== confirmPassword) {
            setErrorMsg("your two password did not match")
            return;
        }
        if (password.length < 6) {
            setErrorMsg("password must be 6 characters or longer")
            return;
        }
        setErrorMsg('')

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result?.user;
                if (user) {
                    setUser(user)
                    setSuccessMsg('User created')
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
                const user = (result?.user);
                if (user) {
                    setUser(user)
                    setSuccessMsg('User created')
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
        <div className="auth-form-container">
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Register</h1>

                    <form onSubmit={handleCreateUser}>

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <br />
                            <input onBlur={handleEmailBlur} className='input' type="email" name="email" id="email" required />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input onBlur={handlePassword} className='input' type="password" name="password" id="password" required />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <br />
                            <input onBlur={handleConfirmPassword} className='input' type="password" name="confirmPassword" id="confirmPassword" required />
                        </div>

                        <p className='form-error'>{errorMsg}</p>
                        <p className='form-success'>{successMsg}</p>


                        <button className='auth-form-submit' type="submit">Sign Up</button>
                    </form>
                    <p className='redirect'>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>


                    <div className='horizontal-divider'>
                        <div className="line-left"></div>
                        <p>or</p>
                        <div className="line-right"></div>
                    </div>

                    <button onClick={handleGoogleSignIn} className='google-auth'>Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useState } from 'react'
import "./login.css"


const Login = () => {
 
    const [state, setState] = useState("Login");
 
 
    
    const loginwithgoogle = () => {
        window.open("https://google-login-psi.vercel.app/auth/google/callback", "_self")
    }
    return (

        <div className="loginsignup" >

            <div className="loginsignup-container">
 
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input autoComplete="off" type="text" placeholder="Your name" name="" /> : <></>}
                    <input autoComplete="off" type="email" placeholder="Email address" name="" />
                    <input autoComplete="off" type="password" placeholder="Password" name="" />
                </div>

                <button>{state}</button>
                <p className="or">Or</p>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    {state} With Google
                </button>
                {state === "Login" ?
                    <p className="loginsignup-login">Create an account?&nbsp;<span onClick={() => { setState("Sign Up") }}>Click here</span></p>
                    
                    : <p className="loginsignup-login">Already have an account?&nbsp;<span onClick={() => { setState("Login") }}>Login here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of service and privacy policy.</p>
                </div>
            </div>
        </div>
    )
}


export default Login
import { useState } from "react";
import './LoginForm.css'

const LoginForm = () => {

    const [action, setAction] = useState("Login");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted")
        // setIsSubmitted(true)
    }

    return (
        <>
            <div className="ProfileForm">
                <form action="#" onSubmit={handleSubmit} >
                    <div className="container">
                        <div className="header">
                            <div className="text"> {action} </div>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs" >
                            {action === "Login" ? <div> </div> : <div className="input" >
                                <img src="" alt="" />
                                <input type="text" placeholder="Name" />
                            </div>}

                            <div className="input">
                                <img src="" alt="" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input">
                                <img src="" alt="" />
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span> </div>}

                        <div className="submit-container">
                            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }} >Sign Up</div>
                            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} >Login</div>
                        </div>
                        <input className="btn btn-outline-light" type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;
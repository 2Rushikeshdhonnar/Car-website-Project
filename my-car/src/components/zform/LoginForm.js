import { useState } from "react";

const LoginForm = () => {

    const [profile, setProfile] = useState({

        emailId: "",
        password: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleEmailIdChange = (event) => {
        // console.log("Age is Changed " + event.target.value )
        setProfile({ ...profile, emailId: event.target.value })
    }

    const handlePasswordChange = (event) => {
        // console.log("Age is Changed " + event.target.value )
        setProfile({ ...profile, password: event.target.value })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted")
        setIsSubmitted(true)
    }


    return (
        <>
            {!isSubmitted && <div className="container bg-warning text-bg-secondary p-3" >
                <h2 className="text-center text-dark" >Login Form</h2>
                <form action="#" onSubmit={handleSubmit} >
                    <div>
                        <label className="form-label" >Email ID
                            <input className="form-control" type="email" value={profile.emailId} onChange={handleEmailIdChange} required />
                        </label>
                    </div>
                    <div>
                        <label className="form-label" >Password
                            <input className="form-control" type="password" value={profile.password} onChange={handlePasswordChange} required />
                        </label>
                    </div>
                    <input className="btn btn-dark" type="submit" />
                    <button className="btn btn-dark ms-3" type="reset" onClick={() => setProfile({ emailId: "", password: "" })} >Reset</button>
                </form>
            </div>}

            {isSubmitted && <div className="border border-2 border-success rounded-3 p-3" >
                <h1>You LoggedIn SuccessFully</h1>
                <h3>EmailId: {profile.emailId} </h3>
                <h3>Password: {profile.password} </h3>
                <button className="btn btn-success m-2" onClick={() => {
                    setIsSubmitted(false);
                    setIsSubmitted(false);
                    setProfile({ emailId: "",password:"" })
                }} >Back to Form</button>
            </div>}
        </>
    )
}

export default LoginForm;
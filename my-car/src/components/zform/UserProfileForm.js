import { useState } from "react";
import Footer from "../zfooter/Footer";

const UserProfileForm = () => {

    const [profile, setProfile] = useState({
        name: 'Abc',
        mobileNo: 0,
        emailId: "",
        password: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    // evenrt handler to handle change event of input
    const handleNameChange = (event) => {
        // console.log("Name is Changed " + event.target.value )
        setProfile({ ...profile, name: event.target.value })

    }

    const handleMobileNoChange = (e) => {
        // console.log("Age is Changed " + event.target.value )
        setProfile({ ...profile, mobileNo: e.target.value })
    }
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
            <div>
                {!isSubmitted &&
                    <div className=" card_bg2 text-bg-secondary p-3" style={{ height: "86vh" }} >
                        <h2 className="text-center" >SignUp Form</h2>
                        <form action="#" onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label className="form-label" >Full Name
                                    <input className="form-control" value={profile.name} onChange={handleNameChange} placeholder="Enter Your Name" />
                                </label>
                            </div>
                            <div>
                                <label className="form-label" >Mobile No
                                    <input className="form-control" value={profile.mobileNo} type="tel" required pattern="[0-9]{10}" maxLength="10" onChange={handleMobileNoChange} />
                                </label>
                            </div>
                            <div>
                                <label className="form-label" >Email ID
                                    <input className="form-control" type="email" value={profile.emailId} onChange={handleEmailIdChange} required placeholder="Enter Your EmailID" />
                                </label>
                            </div>
                            <div>
                                <label className="form-label" >Password
                                    <input className="form-control" type="password" value={profile.password} onChange={handlePasswordChange} required placeholder="Enter Your Password" />
                                </label>
                            </div>
                            <input className="btn btn-dark" type="submit" />
                            <button className="btn btn-dark ms-3" type="reset" onClick={() => setProfile({ name: "", age: 0, mobileNo: 0, emailId: "" })} >Reset</button>
                        </form>
                    </div>

                }

                {isSubmitted && <div className="border border-2 border-success rounded-3 p-3 w-50 m-auto mt-5" >
                    <h1 style={{ color: "green" }} >You SignUped SuccessFully</h1>
                    <h2>Full Name: {profile.name} </h2>
                    <h3>MobileNo: {profile.mobileNo} </h3>
                    <h3>EmailId: {profile.emailId} </h3>
                    <h3>Password: {profile.password} </h3>
                    <button className="btn btn-success m-2" onClick={() => {
                        setIsSubmitted(false);
                        setIsSubmitted(false);
                        setProfile({ name: "", age: 0, mobileNo: 0, emailId: "", password: "" })
                    }} >Back to Form</button>
                </div>}
            </div>

            <div >
                <Footer />
            </div>
        </>
    )
}

export default UserProfileForm;
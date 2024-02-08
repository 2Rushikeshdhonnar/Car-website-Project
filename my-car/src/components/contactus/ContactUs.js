import React, { useState } from 'react';

import './ContactUs.css'
import Footer from '../zfooter/Footer';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        resetPassword: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const PhoneNumber = (phoneNumber) => {
        return /^\d{10}$/.test(phoneNumber);
    };
    const Password = (password) => {
        return /^\d{6}$/.test(password);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (formData.phoneNumber && !PhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits';
        }
        if (formData.password && !Password(formData.password)) {
            newErrors.password = 'Password must be 6 digits';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
        
    };

    return (
        <div>
            <div id="containerr">
                <form onSubmit={handleSubmit} className='contact_form' >
                    <div className='form_class'>
                        <h1 style={{ color: "orange" }}> Contact Us </h1>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form_class'>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form_class'>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                    </div>
                    <div className='form_class'>
                        <label>Reset Password:</label>
                        <input
                            type="password"
                            name="resetPassword"
                            value={formData.resetPassword}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form_class'>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form_class'>
                        <button type="submit" className='contact_btn' >Submit</button>
                    </div>
                </form>
            </div>


            <div >
                <Footer />
            </div>



        </div>

        
    )
}
export default ContactUs;
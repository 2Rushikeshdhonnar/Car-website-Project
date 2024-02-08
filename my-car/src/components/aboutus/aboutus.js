import Footer from '../zfooter/Footer';
import './AboutUs.css';
import { useState } from 'react';
const AboutUs = () => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div>
            <div className="about-us-container">
                <div className="about-us-content">
                    <h1 id="ab">About Us</h1>
                    <p className='wel'>Welcome to our Online Car Management System!</p>
                    <p style={{ color: "black" }}>
                        Our goal is to simplify the process of car management, whether you are
                        a car owner, fleet manager, or automotive enthusiast.
                    </p>
                    <h2>Meet the Team</h2>
                    <p style={{ color: "black" }}>
                        Our mission is to empower users with the tools and information they
                        need to effectively manage their cars, from maintenance schedules to
                        fuel efficiency tracking.
                    </p>
                    <button onClick={toggleInfo}>
                        {showInfo ? 'Hide  Info' : 'Show  Info'}
                    </button>
                    {showInfo && (
                        <div>
                            <p>Behind [Car Company] is a dedicated team of professionals who are passionate about technology, automobiles, and customer success. Our diverse team brings together expertise in software development, automotive engineering, and customer support to ensure you receive the best service possible.</p>
                        </div>
                    )}
                    <h2>Why Choose Us?</h2><ol className='about_ol' >
                        <li>Intuitive and easy-to-use interface</li>
                        <li>Comprehensive car management features</li>
                        <li>Real-time data updates</li>
                        <li>Secure and reliable platform</li>
                        <li>Passionate and dedicated team</li></ol>
                </div>
            </div>

            <div >
                <Footer />
            </div>
        </div>


    );
};
export default AboutUs;


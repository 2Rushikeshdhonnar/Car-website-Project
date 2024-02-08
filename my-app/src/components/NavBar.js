import { useState } from "react";
import './NavbarStyles.css'

function NavBar() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <a href="index.html">
                    <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
                </a>

                <div className={`menu ${isMenuOpen ? 'open' : ''}`} >
                    <ul id="navbar" >
                        <li> <a className="active" href="index.html">Home</a> </li>
                        <li> <a href="index.html">Featured Cars</a> </li>
                        <li> <a href="index.html">Explore Cars</a> </li>
                        <li> <a href="index.html">Contact Us</a> </li>
                        <li> <a href="index.html">About Us</a> </li>
                    </ul>
                </div>


                <div id="mobile" >
                    <div className="hamburger" onClick={toggleMenu}>
                        <i className="fas fa-bars" > </i>
                    </div>
                    {/* <i className="fas fa-times" > </i> */}
                </div>
            </nav>
        </>
    )
}
export default NavBar;
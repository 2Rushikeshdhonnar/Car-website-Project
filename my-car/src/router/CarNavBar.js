import { Link, Outlet } from 'react-router-dom'
import "./CarNavBar.css";
import Modal from '../components/Modal';

const CarNavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark nav-underline ">
                <div className="container-fluid nav__bar">
                    <a className="navbar-brand" href="/"> <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg> </a>
                    <button
                        className="navbar-toggler bg-light "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNav">
                        <ul className="navbar-nav flex-grow-1 justify-content-center">
                            <li className="nav-item"> <Link className="nav-link nav_hover active" aria-current="page" to="/"> Home</Link> </li>
                            <li className="nav-item"> <Link className="nav-link nav_hover " to="/featuredcars"> Featured Cars </Link> </li>
                            {/* <li className="nav-item"> <Link className="nav-link nav_hover" to="/explorecars"> Explore Cars </Link> </li> */}
                            <li className="nav-item"> <Link className="nav-link nav_hover" to="/allbrands"> All Brands </Link> </li>
                            <li className="nav-item"> <Link className="nav-link nav_hover" to="/contactus"> Contact Us </Link> </li>
                            <li className="nav-item"> <Link className="nav-link nav_hover" to="/aboutus"> About Us </Link> </li>
                            <li className="nav-item"> <Link className="nav-link nav_hover" to="/review"> Review Us </Link> </li>
                            <li className="nav-item"> <Link className="nav-link"> <Modal/> </Link> </li>
                            <li className="nav-item"> <Link className="nav-link " to="/userprofileform"> <button className='btn btn-warning' >SignUp</button> </Link> </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
export default CarNavBar;
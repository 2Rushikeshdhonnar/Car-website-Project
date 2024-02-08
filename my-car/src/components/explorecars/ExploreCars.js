import { Link, Outlet } from "react-router-dom";
import Footer from "../zfooter/Footer";

const ExploreCars = () => {

    return (
        <>

            <div>
                <nav className="navbar navbar-expand-md bg-success" >
                    <ul className="navbar-nav" >
                        <li className="nav-item " >
                            <Link className="nav-link active" to=" ">SUV Cars</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to=" ">Hacthback Cars</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to=" ">Sedan Cars</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>


            <div style={{ marginTop: "500px" }} >
                <Footer />
            </div>


        </>
    )
}
export default ExploreCars;
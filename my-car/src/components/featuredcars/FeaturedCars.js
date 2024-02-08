import { Link, Outlet } from "react-router-dom";
import Footer from "../zfooter/Footer";

const FeaturedCars = ()=>{

    return (
        <>
            
            <div>
                <nav className="navbar navbar-expand-md bg-success" >
                    <ul className="navbar-nav" >
                        <li className="nav-item " >
                            <Link className="nav-link active" to="trending-car">Trending Cars</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" to="trending-car">UpComming Cars</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>


            <div style={{ marginTop: "100px" }} >
                <Footer />
            </div>

        </>
    )
}
export default FeaturedCars;
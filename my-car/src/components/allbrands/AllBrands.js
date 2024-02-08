import Footer from '../zfooter/Footer'
import audi from './images/audi.png'
import bmw from './images/bmw.png'
import hyundai from './images/hyundai.png'
import kia from './images/kia.png'
import landrover from './images/landrover.png'
import mahindra from './images/mahindra.png'
import maruti from './images/maruti.png'
import mercedes from './images/mercedes.png'
import mg from './images/mg.png'
import skoda from './images/skoda.png'
import tata from './images/tata.png'
import toyota from './images/toyota.png'

import { Link, Outlet } from "react-router-dom";

const AllBrands = () => {

    return (
        <>
            <h2 className="text-center" >All Brands</h2>
            <div>
                <nav className="navbar navbar-expand-md bg-secondary" >
                    <ul className="nav justify-content-center" >
                        <li className="nav-item" >
                            <Link className="nav-link active" to="audi">
                                <div className="card card_hover ">
                                    <img src={audi} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">AUDI</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="bmw">
                                <div className="card card_hover ">
                                    <img src={bmw} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">BMW</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="hyundai">
                                <div className="card card_hover ">
                                    <img src={hyundai} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">HYUNDAI</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="kia">
                                <div className="card card_hover ">
                                    <img src={kia} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">KIA</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="landrover">
                                <div className="card card_hover ">
                                    <img src={landrover} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">LANDROVER</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="mahindra">
                                <div className="card card_hover ">
                                    <img src={mahindra} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">MAHINDRA</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="maruti">
                                <div className="card card_hover ">
                                    <img src={maruti} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">MARUTI</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="mercedes">
                                <div className="card card_hover ">
                                    <img src={mercedes} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">MERCEDES</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="mg">
                                <div className="card card_hover ">
                                    <img src={mg} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">MG</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="skoda">
                                <div className="card card_hover ">
                                    <img src={skoda} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">SKODA</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="tata">
                                <div className="card card_hover ">
                                    <img src={tata} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">TATA</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link className="nav-link active" to="toyota">
                                <div className="card card_hover ">
                                    <img src={toyota} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">TOYOTA</h5>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>


            <div style={{ marginTop: "200px" }} >
                <Footer />
            </div>
        </>
    )
}
export default AllBrands;
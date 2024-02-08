// import Homepng from '../data/homeimg/Home.png'
import "./Home.css"

import { Link } from 'react-router-dom'
import Carousell from './carousel/Carousel'
import Footer from "./zfooter/Footer"
// import Karousel from "./carousel/Karousel"


const Home = () => {

    return (
        <>
            <Carousell />

            <div className="HomeDesign" >
                {/* <div className="HomeHeading" >
                    <h3>Find Your Car</h3>
                    <h1>TODAY</h1>
                </div>
                <img src={Homepng} alt='' className="img-fluid HomeLogo card_hover" /> */}

                {/* <div>
                    <Link to="/allbrands"> <button className="ExploreCarsBtn card_hover" >FIND NOW</button> </Link>
                </div> */}

                <div className="mt-5" >
                    <Link to="/allbrands">
                        <div className="container-button m-auto">
                            <div className="hover bt-1" />
                            <div className="hover bt-2" />
                            <div className="hover bt-3" />
                            <div className="hover bt-4" />
                            <div className="hover bt-5" />
                            <div className="hover bt-6" />
                            <button className="bn" />
                        </div>
                    </Link>
                </div>

            </div>
            
            <div style={{ marginTop: "150px" }} >
                <Footer />
            </div>

            {/* <Karousel/> */}



        </>
    )
}
export default Home;
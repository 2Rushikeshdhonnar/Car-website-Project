import './HomePage.css'
function HomePage() {

    return (
        <>
            <div className="HomeDesign" >
                <div className="HomeHeading" >
                    <h3>FIND YOUR CAR</h3>
                    <h1>TODAY</h1>
                </div>
                <img className="HomeLogo" src="./Home.png" alt="" />
                <div>
                    <button className="ExploreCarsBtn" >EXPLORE CARS</button>
                </div>
            </div>
        </>
    )
}

export default HomePage;
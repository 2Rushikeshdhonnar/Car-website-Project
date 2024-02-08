import CardOneItem from './CardOneItem';
import './CardsOne.css'

import { useState } from "react";




const CardsOne = () => {

    const [car, setCar] = useState("Lamborghini");


    return (
        <>
            <div>
                <div className="submit-container">
                    <div className={car === "Trending" ? "submit gray" : "submit"} onClick={() => { setCar("Lamborghini") }} >Lamborghini</div>
                    <div className={car === "BMW" ? "submit gray" : "submit"} onClick={() => { setCar("BMW") }} >BMW </div>
                    <div className={car === "Tata" ? "submit gray" : "submit"} onClick={() => { setCar("Tata") }} >Tata</div>
                </div>

                {car === "Lamborghini" && <div className="card-container Trending">
                    <CardOneItem item={{ url: "./images/Car1.png", brand: "Lamborghini", name: "Urus", price: "4.18 - 4.22 Cr" }} />
                    <CardOneItem item={{ url: "./images/Car2.png", brand: "Lamborghini", name: "Revuelto", price: "8.89 Cr" }} />
                    <CardOneItem item={{ url: "./images/Car3.png", brand: "Lamborghini", name: "Huracan EVO", price: "4 - 4.99 Cr" }} />
                </div> 
                }

                {car === "BMW" && <div className="card-container BMW">
                    <CardOneItem item={{ url: "./images/BMWCar1.png", brand: "BMW", name: "XM", price: "2.60 Cr" }} />
                    <CardOneItem item={{ url: "./images/BMWCar2.png", brand: "BMW", name: "Z4", price: "90.90 Lakh" }} />
                    <CardOneItem item={{ url: "./images/BMWCar3.png", brand: "BMW", name: "M2", price: "99.90 Lakh" }} />
                    <CardOneItem item={{ url: "./images/BMWCar4.png", brand: "BMW", name: "2 Series", price: "43.50 - 46.40 Lakh" }} />
                </div>
                }

                {car === "Tata" && <div className="card-container Tata">
                    <CardOneItem item={{ url: "./images/TataCar1.png", brand: "Tata", name: "Nexon", price: "8.10 - 15.50 Lakh" }} />
                    <CardOneItem item={{ url: "./images/TataCar2.png", brand: "Tata", name: "Punch", price: "6 - 10.10 Lakh" }} />
                </div>
                }

            </div>
        </>

    )
}

export default CardsOne;
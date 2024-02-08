import BMWCar1 from './images/BMWCar1.png'
import TataCar1 from './images/TataCar1.png'
import LamboCar1 from './images/LamboCar1.png'

// data file which contains mobile data
const cars = [
    {
        id:1,
        model:"XM",
        brand:"BMW",
        price:"1.27 - 1.30 Cr",
        specification:{
            enginecc:"4395 cc",
            maxPower:"643.69 bhp",
            mileage:"61.9 kmpl",
            fuel:"Petrol"
        },
        image: BMWCar1
    },

    {
        id:2,
        model:"Nexon",
        brand:"Tata",
        price:"8.10 - 15.50 Lakh",
        specification:{
            enginecc:"1497 cc",
            maxPower:"118.27 bhp",
            mileage:"24.08 kmpl",
            fuel:"Diesel"
        },
        image: TataCar1
    },

    {
        id:3,
        model:"Urus",
        brand:"Lamborgini",
        price:"4.18 - 4.22 Cr",
        specification:{
            enginecc:"3999 cc",
            maxPower:"657.1 bhp",
            mileage:"7.80 kmpl",
            fuel:"Petrol"
        },
        image: LamboCar1
    },
    
    {
        id:3,
        model:"Urus",
        brand:"Lamborgini",
        price:"4.18 - 4.22 Cr",
        specification:{
            enginecc:"3999 cc",
            maxPower:"657.1 bhp",
            mileage:"7.80 kmpl",
            fuel:"Petrol"
        },
        image: LamboCar1
    },
]
export default cars;
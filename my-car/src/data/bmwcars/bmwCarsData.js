import bmwX5 from './bmw/bmwX5.jpg'
import bmwX7 from './bmw/bmwX7.jpg'
import bmwXM from './bmw/bmwXM.jpg'
import bmwZ4 from './bmw/bmwZ4.jpg'


// data file which contains mobile data
const bmwcars = [
    {
        id:1,
        model:"X5",
        brand:"BMW",
        price:"95.20 Lakh - 1.08 Cr",
        specification:{
            enginecc:"2993 cc - 2998 cc",
            maxPower:"281.68 - 375.48 bhp",
            mileage:"12 kmpl",
            fuel:"Diesel / Petrol"
        },
        image: bmwX5
    },

    {
        id:2,
        model:"X7",
        brand:"BMW",
        price:"1.27 - 1.30 Cr",
        specification:{
            enginecc:"2993 cc - 2998 cc",
            maxPower:"335.25 - 375.48 bhp",
            mileage:"11.29 - 14.31 kmpl",
            fuel:"Diesel / Petrol"
        },
        image: bmwX7
    },

    {
        id:3,
        model:"XM",
        brand:"BMW",
        price:"2.60 Cr",
        specification:{
            enginecc:"4395 cc",
            maxPower:"643.69 bhp",
            mileage:"61.9 kmpl",
            fuel:"Petrol"
        },
        image: bmwXM
    },

    {
        id:4,
        model:"Z4",
        brand:"BMW",
        price:"90.90 Lakh",
        specification:{
            enginecc:"2998 cc",
            maxPower:"335 bhp",
            mileage:"12 kmpl",
            fuel:"Petrol"
        },
        image: bmwZ4
    },
   
]
export default bmwcars;
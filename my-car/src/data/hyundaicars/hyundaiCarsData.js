import hyundaiCreta1 from '../hyundaicars/hyundai/hyundaiCreta1.jpg'
import hyundaiI201 from '../hyundaicars/hyundai/hyundaiI201.jpg'
import hyundaiVenue1 from '../hyundaicars/hyundai/hyundaiVenue1.jpg'
import hyundaiVerna1 from '../hyundaicars/hyundai/hyundaiVerna1.jpg'

import CretaCaro from './hyundai/hyundai_carousel/CretaCaro'
import I20Caro from './hyundai/hyundai_carousel/I20Caro'
import VenueCaro from './hyundai/hyundai_carousel/VenueCaro'
import VernaCaro from './hyundai/hyundai_carousel/VernaCaro'



// data file which contains mobile data
const hyundaicars = [
    {
        id:1,
        model:"Creta",
        brand:"Hyundai",
        price:"10.87 - 19.20 Lakh",
        specification:{
            enginecc:"1493 cc - 1498 cc",
            maxPower:"113.18 - 113.98 bhp",
            mileage:"14.0 - 18.0 kmpl",
            fuel:"Diesel / Petrol"
        },
        image: {
            img: hyundaiCreta1,
            caro: <CretaCaro/>
        },
    },

    {
        id:2,
        model:"I20",
        brand:"Hyundai",
        price:"6.99 - 11.16 Lakh",
        specification:{
            enginecc:"1197 cc",
            maxPower:"81.8 - 86.76 bhp",
            mileage:"16.0 - 20.0 kmpl",
            fuel:"Petrol"
        },
        image: {
            img: hyundaiI201,
            caro: <I20Caro/>
        },
    },

    {
        id:3,
        model:"Venue",
        brand:"Hyundai",
        price:"7.89 - 13.48 Lakh",
        specification:{
            enginecc:"998 cc - 1493 cc",
            maxPower:"81.8 - 118.41 bhp",
            mileage:"24.2 kmpl",
            fuel:"Diesel / Petrol"
        },
        image: {
            img: hyundaiVenue1,
            caro: <VenueCaro/>
        },
    },

    {
        id:4,
        model:"Verna",
        brand:"Hyundai",
        price:"10.96 - 17.38 Lakh",
        specification:{
            enginecc:"1482 cc - 1497 cc",
            maxPower:"113.18 - 157.57 bhp",
            mileage:"18.6 - 20.6 kmpl",
            fuel:"Petrol"
        },
        image: {
            img: hyundaiVerna1,
            caro: <VernaCaro/>
        },
    },
   
]
export default hyundaicars;
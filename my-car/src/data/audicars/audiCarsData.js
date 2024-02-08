import audiA4 from './audi/audiA4.jpg'
import audiQ3 from './audi/audiQ3.jpg'
import audiQ5 from './audi/audiQ5.jpg'
import audiQ7 from './audi/audiQ7.jpg'


// data file which contains mobile data
const audicars = [
    {
        id:1,
        model:"A4",
        brand:"Audi",
        price:"43.85 - 51.85 Lakh",
        specification:{
            enginecc:"1984 cc",
            maxPower:"187.74 bhp",
            mileage:"18 kmpl",
            fuel:"Petrol"
        },
        image: audiA4
    },

    {
        id:2,
        model:"Q3",
        brand:"Audi",
        price:"42.77 - 51.94 Lakh",
        specification:{
            enginecc:"1984 cc",
            maxPower:"187.74 bhp",
            mileage:"15 kmpl",
            fuel:"Diesel"
        },
        image: audiQ3
    },

    {
        id:3,
        model:"Q5",
        brand:"Audi",
        price:"62.35 - 68.22 Lakh",
        specification:{
            enginecc:"1984 cc",
            maxPower:"245.59 bhp",
            mileage:"13.47 kmpl",
            fuel:"Petrol"
        },
        image: audiQ5
    },

    {
        id:4,
        model:"Q7",
        brand:"Audi",
        price:"85.21 - 92.59 Lakh",
        specification:{
            enginecc:"2995 cc",
            maxPower:"335.25 bhp",
            mileage:"11 kmpl",
            fuel:"Petrol"
        },
        image: audiQ7
    },
   
]
export default audicars;
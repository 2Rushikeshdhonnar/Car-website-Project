import { Link } from 'react-router-dom'
import CarCard from './CarCard';
import cars from '../../data/car/carData';


const CarGallary = () => {

    const carGallary = cars.map(
        mbl =><Link className=' m-2 mt-4 pb-3 card_hover' title='View Details' key={mbl.id} to={"trending-car-detail/" + mbl.id} > <CarCard  car={mbl} /> </Link>)

    return (

        <div className='d-flex flex-wrap justify-content-center ' >
            {carGallary}
        </div>

    )
}
export default CarGallary;
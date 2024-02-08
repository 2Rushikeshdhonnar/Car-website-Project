import { Link } from 'react-router-dom'
import bmwcars from '../../../data/bmwcars/bmwCarsData';
import BmwCarCard from './BmwCarCard';

const BmwCarGallary = () => {

    const bmwCarGallary = bmwcars.map(mbl => <div className='border border-2 border-success rounded-2 m-2 mt-4 pb-3 card_hover' >
        <BmwCarCard car={mbl} />
        <Link title='View Details' key={mbl.id} to={"bmw-car-detail/" + mbl.id} >
            <button car={mbl} className='btn btn-primary' >View Details</button>
        </Link>
    </div>)

    return (

        <div className='d-flex justify-content-evenly m-2 flex-wrap' >
            {bmwCarGallary}
        </div>


    )
}
export default BmwCarGallary;
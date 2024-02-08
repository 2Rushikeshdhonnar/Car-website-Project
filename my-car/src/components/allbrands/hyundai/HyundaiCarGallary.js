import { Link } from 'react-router-dom'
import hyundaicars from '../../../data/hyundaicars/hyundaiCarsData';
import HyundaiCarCard from './HyundaiCarCard';

const HyundaiCarGallary = () => {

    const hyundaiCarGallary = hyundaicars.map(mbl => <div className='border border-2 border-success rounded-2 m-2 mt-4 pb-3 card_hover' >
        <HyundaiCarCard car={mbl} />
        <Link title='View Details' key={mbl.id} to={"hyundai-car-detail/" + mbl.id} >
            <button car={mbl} className='btn btn-primary' >View Details</button>
        </Link>
    </div>)

    return (

        <div className='d-flex justify-content-evenly m-2 flex-wrap' >
            {hyundaiCarGallary}
        </div>


    )
}
export default HyundaiCarGallary;
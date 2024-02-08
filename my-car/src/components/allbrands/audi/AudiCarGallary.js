import { Link } from 'react-router-dom'
import AudiCarCard from './AudiCarCard';
import audicars from '../../../data/audicars/audiCarsData';

const AudiCarGallary = ()=>{

    const audiCarGallary = audicars.map(
        mbl =>
            <div className='border border-2 border-success rounded-2 m-2 mt-4 pb-3 card_hover' >
                <AudiCarCard car={mbl} />
                <Link title='View Details' key={mbl.id} to={"audi-car-detail/" + mbl.id} >
                    <button car={mbl} className='btn btn-primary' >View Details</button>
                </Link>
            </div>
    )

    return (
        
            <div className='d-flex justify-content-evenly m-2 flex-wrap' >
                {audiCarGallary }
            </div>
            
        
    )
}
export default AudiCarGallary;
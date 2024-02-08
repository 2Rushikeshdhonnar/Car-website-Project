import { useParams, useNavigate } from 'react-router-dom'
import audicars from '../../../data/audicars/audiCarsData'



const AudiCarDetails = () => {
    //used to retreive route parameter value
    const { id } = useParams()
    const navigate = useNavigate()


    const car = audicars.find(mbl => mbl.id == id)
    const handleClick = () => {
        navigate('/allbrands/audi')
    }

    return (
        <>
            <h2>Car Details</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                <div>
                    <img className='img-thumbnail ' src={car.image} style={{ width: '40rem' }} />
                </div>
                <div className=' card_bg' style={{ width: '40rem' }} >
                    <h2 style={{ color: "orange" }} >{car.brand} {car.model}</h2>
                    <h4 style={{ color: "orange" }} >Price: &#8377; {car.price}</h4>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Specification</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr >
                                <th >Engine CC</th>
                                <td > {car.specification.enginecc} </td>
                            </tr>
                            <tr>
                                <th>Max Power</th>
                                <td> {car.specification.maxPower} </td>
                            </tr>
                            <tr>
                                <th>Mileage</th>
                                <td> {car.specification.mileage} </td>
                            </tr>
                            <tr>
                                <th>Fuel Type</th>
                                <td> {car.specification.fuel} </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='btn btn-warning card_hover' onClick={handleClick}>Back To Gallary</button>
                </div>
            </div>
        </>
    )
}

export default AudiCarDetails
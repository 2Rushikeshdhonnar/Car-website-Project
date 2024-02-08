import { useParams, useNavigate } from 'react-router-dom'
import cars from '../../data/car/carData'


const CarDetail = () => {
    //used to retreive route parameter value
    const { id } = useParams()
    const navigate = useNavigate()


    const car = cars.find(mbl => mbl.id == id)
    const handleClick = () => {
        navigate('/featuredcars/trending-car')
    }

    return (
        <>
            <h2>Car Details</h2>
            <div>
                <h2>{car.brand} {car.model}</h2>
                <img className='img-thumbnail' src={car.image} style={{ width: '50rem' }} alt='' />
                <h4>Price: &#8377; {car.price}</h4>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Engine CC</th>
                            <td> {car.specification.enginecc} </td>
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
                <button className='btn btn-outline-success' onClick={handleClick}>Back To Gallary</button>
            </div>


        </>
    )
}

export default CarDetail
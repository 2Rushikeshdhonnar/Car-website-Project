const HyundaiCarCard = ({car})=>{

    return(
        <div className="card mb-3 " style={{width:'19rem'}} >
            <img className="card-img-top" src={car.image.img} alt="" />
            <div className="card-body">
                <h3 className="card-title"> {car.brand} {car.model} </h3>
                <h4 className="card-subtitle"> Price: &#8377; {car.price} </h4>
            </div>
        </div>
    )
}
export default HyundaiCarCard;
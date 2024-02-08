import './CardOneItem.css'

const CardOneItem = ({item}) => {
    
    return (

        <div className='card-car' >
            <img className='image-container' src={item.url} alt="" />
            <h3 className='brand-name' > {item.brand} {item.name} </h3>
            <h4 className='brand-price' > Price: &#8377; {item.price} </h4>
            <button className='brand-details-btn'> View More Details </button>
        </div>

        
    )
}

export default CardOneItem;
import carouselimg1 from '../carousel/carouselimg1.jpeg'
import carouselimg2 from '../carousel/carouselimg2.jpeg'
import carouselimg3 from '../carousel/carouselimg3.jpeg'

const Karousel = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carouselimg1} className="d-block w-100" />
                    <div className="carousel-caption top-50 d-none d-md-block">
                        <h5 className='fs-3' >Wait a minute for Delicious</h5>
                        <h1 className='fs-1' >FOOD</h1>
                        <button className='btn btn-success' >Order Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carouselimg2} className="d-block w-100"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Wait a minute for Delicious</h5>
                        <h1>FOOD</h1>
                        <button className='btn btn-outline-success' >Order Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={carouselimg3} className="d-block w-100"  />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Wait a minute for Delicious</h5>
                        <h1>FOOD</h1>
                        <button className='btn btn-outline-success' >Order Now</button>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
export default Karousel;
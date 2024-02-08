import hyundaiVenue1 from '../hyundaiVenue1.jpg'
import hyundaiVenue2 from '../hyundaiVenue2.jpg'
import hyundaiVenue3 from '../hyundaiVenue3.jpg'
import hyundaiVenue4 from '../hyundaiVenue4.jpg'


const VenueCaro = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide"data-bs-ride="carousel" style={{ width: '40rem' }} >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={hyundaiVenue1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVenue2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVenue3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVenue4} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}
export default VenueCaro;
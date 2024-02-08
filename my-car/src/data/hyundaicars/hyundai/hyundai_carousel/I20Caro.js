import hyundaiI201 from '../hyundaiI201.jpg'
import hyundaiI202 from '../hyundaiI202.jpg'
import hyundaiI203 from '../hyundaiI203.jpg'
import hyundaiI204 from '../hyundaiI204.jpg'

const I20Caro = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide"data-bs-ride="carousel" style={{ width: '40rem' }} >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={hyundaiI201} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiI202} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiI203} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiI204} className="d-block w-100" alt="..." />
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
export default I20Caro;
import hyundaiVerna1 from '../hyundaiVerna1.jpg'
import hyundaiVerna2 from '../hyundaiVerna2.jpg'
import hyundaiVerna3 from '../hyundaiVerna3.jpg'
import hyundaiVerna4 from '../hyundaiVerna4.jpg'


const VernaCaro = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide"data-bs-ride="carousel" style={{ width: '40rem' }} >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={hyundaiVerna1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVerna2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVerna3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiVerna4} className="d-block w-100" alt="..." />
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
export default VernaCaro;
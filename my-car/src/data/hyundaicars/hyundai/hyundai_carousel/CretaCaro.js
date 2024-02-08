import hyundaiCreta1 from '../hyundaiCreta1.jpg'
import hyundaiCreta2 from '../hyundaiCreta2.jpg'
import hyundaiCreta3 from '../hyundaiCreta3.jpg'
import hyundaiCreta4 from '../hyundaiCreta4.jpg'

const CretaCaro = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide"data-bs-ride="carousel" style={{ width: '40rem' }} >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                    <img src={hyundaiCreta1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiCreta2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiCreta3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src={hyundaiCreta4} className="d-block w-100" alt="..." />
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
export default CretaCaro;
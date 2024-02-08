
import "./PageFooter.css";

function PageFooter() {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Column1 */}
                    <div className="col">
                        <h1>Auto Hub pvt.ltd</h1>
                        <h3 className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet South North</li>
                        </h3>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Quick Links</h4>
                        <ui className="list-unstyled">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Follow us on </h4>
                        <ui className="list-unstyled">
                            <li> <i class="fa-brands fa-square-instagram" style={{color:'orange'}} ></i> </li>
                            <li> <i class="fa-brands fa-square-instagram" style={{color:'orange'}} ></i> </li>
                            <li> <i class="fa-brands fa-square-instagram" style={{color:'orange'}} ></i> </li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="copyright-row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Auto Hub | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PageFooter;
import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="pt-4 text-center text-md-start bg-dark">
            <div className="container p-4 pb-3 pb-lg-1">
                <div className="row">

                    <div className="col-md-4 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 fw-bold"><i className="fa-solid fa-burger"></i> Angry Burger
                        </h6>
                        <div>
                            <div><Link to="/Menu" className="fs-5 text-decoration-none text-white " > Menu</Link></div>
                            <div><Link to="/Contacto" className="fs-5 text-decoration-none text-white" > Contacto</Link></div>
                            <div><Link to="/Ubicacion" className="fs-5 text-decoration-none text-white" > Locales</Link></div>
                        </div>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-5 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold">Contacto</h6>
                        <p><i className="fa-solid fa-house"></i> Ocean Avenue</p>
                        <p><i className="fa-solid fa-paper-plane"></i> <Link className="text-decoration-none text-white" href="mailto:Chunkylover53@aol.com">contacto@angryburger.com</Link></p>
                        <p><i className="fa-solid fa-mobile-screen-button"></i> 1-800-U-BURGER</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 fw-bold">Síguenos</h6>
                        <Link to="/"><i className="fa-brands fa-square-facebook m-1 colorfb"></i></Link>
                        <Link to="/"><i className="fa-brands fa-twitter m-1 colortw"></i></Link>
                        <Link to="/"><i className="fa-brands fa-instagram m-1 colorig"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start colour">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            We are a top-rated restaurant known for our delicious food and excellent service. Join us for a dining experience you'll never forget.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/" className="text-dark">Home</a>
                            </li>
                            <li>
                                <a href="/menu" className="text-dark">Menu</a>
                            </li>
                            <li>
                                <a href="/about-us" className="text-dark">About Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <p className="text-dark">123 Restaurant St., Mumbai, India</p>
                            </li>
                            <li>
                                <p className="text-dark">+91 9876543210</p>
                            </li>
                            <li>
                                <p className="text-dark">baratie@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Restaurant. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;

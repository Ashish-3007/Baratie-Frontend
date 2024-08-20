import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 h1-about">About Us</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 img container-img">
                    <img src={require('../images/2-removebg-preview 1.png')}></img>
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                    <h2>Welcome to Baratie</h2>
                    <p>
                        Located in the heart of Mumbai, Baratie is a premier Japanese restaurant offering an exquisite dining experience. Our menu features a diverse range of authentic Japanese dishes, carefully crafted with the freshest ingredients to ensure the highest quality and taste.
                    </p>
                    <p>
                        At Baratie, we believe in the art of Japanese cuisine, where each dish is prepared with meticulous attention to detail, balancing flavors and textures to create a memorable culinary journey. Our chefs are trained in traditional techniques, bringing the essence of Japan to your plate.
                    </p>
                    <p>
                        Whether you're a sushi enthusiast, a ramen lover, or someone looking to explore new flavors, Baratie has something for everyone. Join us for an unforgettable dining experience that celebrates the rich culture and heritage of Japanese food.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

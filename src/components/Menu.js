import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menu.css';
import { CartContext } from '../components/CartContext';

function Menu() {
    const { addToCart } = useContext(CartContext);
    const [searchQuery, setSearchQuery] = useState('');

    const menuItems = [
        { name: 'Sushi', price: 700, image: require('../images/images (7)~2.jpeg.jpg') },
        { name: 'Ramen', price: 500, image: require('../images/images (8).jpeg.jpg') },
        { name: 'Tempura', price: 400, image: require('../images/images (10)~2.jpeg.jpg') },
        { name: 'Udon', price: 450, image: require('../images/images (11)~2.jpeg.jpg') },
        { name: 'Miso Soup', price: 200, image: require('../images/images (12)~2.jpeg.jpg') },
        { name: 'Teriyaki Chicken', price: 600, image: require('../images/images (13)~21.jpeg.jpg') },
    ];

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Menu</h1>
            <div className="menu-search">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a menu item..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="row">
                {filteredItems.map((item, index) => (
                    <div className="col-lg-6 col-md-6 mb-4" key={index}>
                        <div className="card">
                            <div className='menu-flex'>
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-text">Description for {item.name}</p>
                                    <p className="card-text"><strong>Price:</strong> ₹{item.price}</p>
                                    <button className="btn btn-primary button-menu" onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                                <div>
                                    <img src={item.image} className="card-img-top" alt={item.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;

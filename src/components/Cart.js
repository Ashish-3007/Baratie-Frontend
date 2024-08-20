import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cart.css';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/billing');
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container mt-5">
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <>
                    <ul className="list-group mb-3">
                        {cartItems.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                {item.name} - ₹{item.price}
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total Price: ₹{totalPrice}</h4>
                    <button className="btn btn-success" onClick={handleCheckout} disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;

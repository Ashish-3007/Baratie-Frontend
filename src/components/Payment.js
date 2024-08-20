import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Payment.css';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [address, setAddress] = useState('');
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleOrderConfirmation = () => {
        clearCart();
        navigate('/order-confirmation');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Payment</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleOrderConfirmation}>
                    Confirm Order
                </button>
            </form>
        </div>
    );
}

export default Payment;

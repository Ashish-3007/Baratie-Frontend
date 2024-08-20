import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Billing.css';

function Billing() {
    const { clearCart } = useContext(CartContext);
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handlePayment = () => {
        if (address) {
            clearCart();
            navigate('/order-confirmation');
        } else {
            alert('Please enter your address');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Billing</h1>
            <form>
                <div className="mb-3">
                    <input
                        placeholder='Address'
                        type="text"
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="button" claclassName="button" onClick={handlePayment}>Make Payment</button>
            </form>
        </div>
    );
}

export default Billing;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setSuccessMessage('Login successful');
            console.log('Login successful');

            setEmail('');
            setPassword('');
            setErrors({});
        } else {
            setErrors({ general: 'Invalid email or password' });
        }
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className="form-group">
                    <input
                        placeholder='Email'
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <input
                        placeholder='Password'
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit" className='button'>Login</button>
            </form>
            <p className='login-to-register'>Don't have an account? <Link to="/register">Register</Link></p>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default Login;

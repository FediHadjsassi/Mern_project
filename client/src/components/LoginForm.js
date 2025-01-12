// src/components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/user/login', {
                email,
                password
            });
            console.log('User logged in successfully:', response.data);
            localStorage.setItem('token', response.data.token);

            navigate('/projects');
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                <h4 className="loginsoustitre"> Email:</h4>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" required />
                </label>
                <label>
                <h4 className="loginsoustitre">Password:</h4>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" required />
                </label>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

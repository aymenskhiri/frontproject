import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7258/api/User/login', {
                email: email,
                password: password
            });

            if (response.data && response.data.id_Prof !== null) {
                localStorage.setItem('Id_Prof', response.data.id_Prof);
                localStorage.setItem('Nom', response.data.nom);
                localStorage.setItem('Prenom', response.data.prenom);
                localStorage.setItem('Role', response.data.role);

                if (response.data.role === 'Professeur') {
                    window.location.href = '/reservation-list';
                } else if (response.data.role === 'Admin') {
                    window.location.href = '/salle-list-page';
                } else {
                    setError('Invalid role');
                }
            } else {
                setError('Invalid login credentials');
            }
        } catch (error) {
            setError('An error occurred during login.');
            console.error('Error occurred:', error.response?.data);
        }
    };

    return (
        <div className='container'>
            <form className='f' onSubmit={submitLogin}>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error && <div className='error'>{error}</div>}
                <div className="submit-container">
                    <button type='submit'>Login</button>
                </div>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //store the email of the logged-in user
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check the logged-in status on opening the app
        if (authService.isSignedIn()) {
            setIsLoggedIn(true);
            const token = sessionStorage.getItem('authToken');
            // Decode token to get user information
            const decodedUser = parseJwt(token);
            setEmail(decodedUser?.email || '');
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = async () => {
        authService.signOut((success) => {
            if (success) {
              //clear state and redirect to the sign-in page
                setIsLoggedIn(false);
                setEmail('');
                navigate('/signin');
            }
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <strong>My Fullstack App</strong>
                </a>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto">
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/#"
                                        id="dropdown07"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Welcome {email}!
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                                        <button
                                            className="dropdown-item"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signin">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Helper function to decode JWT token
function parseJwt(token) {
    try {
      //split the JWT token into 3 parts
        const base64Url = token.split('.')[1];
        //replace the characters that are not allowed in base64
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        //parse the base64 string to JSON
        return JSON.parse(window.atob(base64));
    } catch (e) {
        console.error('Error decoding token', e);
        return null;
    }
}

export default NavBar;
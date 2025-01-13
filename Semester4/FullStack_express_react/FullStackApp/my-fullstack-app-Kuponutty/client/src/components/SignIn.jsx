import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import axios from 'axios';
import '../css/signin.css';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = React.useState('');

    const handleSignIn = async (data) => {
        const isSuccess = await authService.signIn(data); // Use data directly from react-hook-form
        if (isSuccess) {
            navigate('/'); // Redirect to the home page
        } else {
            setLoginMessage('Invalid email or password');
        }
    };

    return (
        <form className="form-signin" onSubmit={handleSubmit(handleSignIn)}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>

            {/* Email Field */}
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    {...register('email', { required: 'Email is required'})}
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    {...register('password', { required: 'Password is required' })}
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button className="btn btn-lg btn-primary btn-block" type="submit">
                Sign in
            </button>
                
            {/* Login Message */}
            {loginMessage && <p className="text-danger text-center mt-3">{loginMessage}</p>}
        </form>
    );
};

export default SignIn;
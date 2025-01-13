import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';

const Register = (props) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
  
    function receiveFormData(formData) {
        //send formdata to our login endpoint
        axios.post(`${import.meta.env.VITE_API_URL}/users/register`, formData)
            .then((response) => {
                console.log(response);
                const token = response.data.token || response.headers['x-auth-token'];
                localStorage.setItem('token', token);

                alert('Registration successful! You are now logged in.');
                //redirect to the home page
                navigate('/');
            })
    }

    return ( 
        <form className="form-register" onSubmit={handleSubmit(receiveFormData)}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Register</h1>
            <label htmlFor="inputFirstName" className="sr-only">First Name</label>
            <input {...register('firstName')} type="firstName" id="inputFirstName" className="form-control" placeholder="First Name" />
            <label htmlFor="inputLastName" className="sr-only">Last Name</label>
            <input {...register('lastName')} type="lastName" id="inputLastName" className="form-control" placeholder="Last Name" />
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input {...register('email')} type="email" id="inputEmail" className="form-control" placeholder="Email address" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input {...register('password')} type="password" id="inputPassword" className="form-control" placeholder="Password" />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
     );
}
 
export default Register;
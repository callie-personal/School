import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/createform.css';

const CreateForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            const token = sessionStorage.getItem('authToken');
            console.log('Token used for request:', token); // Log the token
    
            if (!token) {
                alert('You must be logged in to create a card');
                navigate('/signin');
                return;
            }
    
            // Log the data being sent
            console.log('Data to be sent:', data);
    
            const requestData = {
                ...data,
                collectionName: 'Cards', // Ensure this matches the backend requirements
            };
    
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/cards`,
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use Authorization header for the token
                    },
                }
            );
    
            if (response.status === 201) {
                alert('Card created successfully!');
                reset(); // Reset the form
                navigate('/'); // Navigate to the home page
            }
        } catch (error) {
            console.error('Error creating card:', error.response?.data || error.message);
            alert(`Failed to create the card: ${error.response?.data?.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="create-form-container">
            <h2>Create a New Card</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Card Name */}
                <div className="form-group">
                    <label htmlFor="Name">Card Name:</label>
                    <input
                        id="Name"
                        {...register('Name', { required: 'Card Name is required' })}
                        placeholder="Enter card name"
                    />
                    {errors.Name && <p className="error">{errors.Name.message}</p>}
                </div>

                {/* Image Link */}
                <div className="form-group">
                    <label htmlFor="image_link">Image Link:</label>
                    <input
                        id="image_link"
                        {...register('image_link', { required: 'Image Link is required' })}
                        placeholder="Enter image URL"
                    />
                    {errors.image_link && <p className="error">{errors.image_link.message}</p>}
                </div>

                {/* Mana Cost */}
                <div className="form-group">
                    <label htmlFor="mana_cost">Mana Cost:</label>
                    <input
                        id="mana_cost"
                        {...register('mana_cost')}
                        placeholder="Enter mana cost (e.g., {3}{G}{G})"
                    />
                </div>

                {/* Card Text */}
                <div className="form-group">
                    <label htmlFor="card_text">Card Text:</label>
                    <textarea
                        id="card_text"
                        {...register('card_text')}
                        placeholder="Enter card text"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                    Save Card
                </button>
            </form>
        </div>
    );
};

export default CreateForm;
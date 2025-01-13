import jwt from 'jsonwebtoken';

const payload = {
    id: 'user123', // Example user ID
    name: 'Callie Pretty', // Example user name
};

// Use your secret key defined in your environment (or use 'you_spoony_bard' as per your setup)
const secret = 'you_spoony_bard'; // Replace with process.env.JWT_SECRET in production

// Generate a token valid for 1 hour
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Generated Token:', token);
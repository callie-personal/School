import express from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/user.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { passwordStrength } from 'check-password-strength';

const router = express.Router();

const corsOptions = {
  origin: true, // Allow all origins
  credentials: true,
};

router.use(cors(corsOptions));
router.use(express.json()); // Ensures the body is parsed as JSON

// Register Endpoint
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email: email.trim() });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Validate password strength
    const passwordStrengthResult = passwordStrength(password);
    if (passwordStrengthResult.id < 2) {
      return res.status(422).json({ message: 'Password is not strong enough' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email: email.trim(), // Remove any extra spaces
      password: hashedPassword,
    });

    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
      { _id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || 'default_secret', // Use environment variable for JWT_SECRET
      { expiresIn: '12h' } // Token valid for 12 hours
    );

    // Send the response
    res.header('x-auth-token', token).status(201).json({
      message: 'User created successfully',
      token, // Include the token in the response body
      user: { email: newUser.email, _id: newUser._id },
    });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
      }

      const user = await User.findOne({ email: email.trim() });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.JWT_SECRET || 'default_secret',
          { expiresIn: '12h' }
      );

      res.status(200).json({ token, message: 'Login successful' });
  } catch (err) {
      console.error('Login Error:', err);
      res.status(500).json({ message: 'Server error' });
  }
});

//logout endpoint
router.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.status(204).send();
})

// Get All Users Endpoint
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
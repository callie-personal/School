import express from 'express';
var router = express.Router();

import cardsRouter from './cards.js';
import usersRouter from './users.js';

/* GET home page. */
router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => res.send('Welcome to the API'));

export default router;

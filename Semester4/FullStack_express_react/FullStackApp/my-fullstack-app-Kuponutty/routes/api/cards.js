import Card from '../../models/card.js';
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import tokenAuth from '../../middleware/tokenAuth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
const token = 'callie_jwt_token';

router.use(cors());

router.get('/', async (req, res) => {

    try {
        const data = await Card.find().exec();
        res.json(data);
    } catch (err) {
        res.status(500).send();
    }

});

router.get('/:id', async (req, res) => {
    
    try{
        const data = await Card.findById(req.params.id).exec();

        if (!data) {
            return res.status(404).send();
        }
        res.json(data);
    } catch (err) {
        res.status(500).send();
    }
    
});

router.post('/', tokenAuth, async (req, res) => {
    
    try {
        //create a new model from scratch
        const newCard = new Card(req.body);
        const document = await newCard.save()
        res.status(201).json(document);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            res.status(422).send(err);
        } else {
        res.status(500).send();
        }
    }
});

router.put('/:id', tokenAuth, async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body).exec();
        if (!updatedCard) {
            return res.status(404).send();
        }
        res.status(204).send(); //updated successfully
    } catch (err) {
        res.status(500).send();
    }
});

router.patch('/:id', tokenAuth, async (req, res) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body).exec();
        if (!updatedCard) {
            return res.status(404).send();
        }
        res.status(204).send(); //updated successfully
    } catch (err) {
        res.status(500).send();
    }
});

router.delete('/:id', tokenAuth, async (req, res) => {
    try {
        const deletedCard = await Card.findByIdAndDelete(req.params.id).exec();
        if (!deletedCard) {
            return res.status(404).send();
        }
        res.status(204).send(); //deleted successfully
    } catch (err) {
        res.status(500).send();
    }
});

export default router;
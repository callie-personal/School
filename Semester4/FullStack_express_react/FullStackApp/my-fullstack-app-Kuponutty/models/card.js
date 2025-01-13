import mongoose from 'mongoose';

const { Schema, model } = mongoose;

//define the schema
const cardSchema = new Schema({
     collectionName: {
        type: String,
        required: true
     },
     Name: {
        type: String,
        required: true
     },
     image_link: {
        type: String,
        required: true
     },
     mana_cost: {
        type: String,
     },
     converted_mana_cost: {
        type: Number 
     },
     card_text: {
        type: String,
     },
     stats: {
        power: {
            type: Number,
            default: null
        },
        toughness: {
            type: Number,
            default: null
        },
    },
    colours: {
        type: [String],
    },
}, { collection: 'Cards' });

export default mongoose.model('Card', cardSchema);
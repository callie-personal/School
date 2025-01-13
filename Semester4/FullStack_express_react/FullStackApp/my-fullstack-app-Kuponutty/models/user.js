import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const {Schema, model} = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                //email validation with a regex from GPT
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        lowercase: true, //email address syntax is not case sensitive
        trim: true //removes whitespace from both ends of a string
    },
    password: {
        //password will need to be "medium" strength
        type: String,
        required: true,
        maxlength: 255
    }
});

export default new model('User', userSchema);
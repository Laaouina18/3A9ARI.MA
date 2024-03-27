import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Owner', 'Client'],
        required: true 
    } ,
	House: [{ type: Schema.Types.ObjectId, ref: 'House' }]
});

const User = model('User', UserSchema);

export default User;

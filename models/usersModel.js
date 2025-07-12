import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        minLength: [5, 'email must have at least 5 characters'],
        trim: true,
        lowercase:true
        
    },

    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [6, 'Password must be at least 6 characters'],
        trim: true,
        select: false,

    },

    verified: {
        type: Boolean,
        default: false,
    },

    verificationCode: {
        type: String,
        select: false
    },

        verificationCodeValidation: {
        type: Number,
        select: false
    },
        
        forgotPassswordCode: {
        type: String,
        select: false
    },
        forgotPassswordCodeValidation: {
        type: Number,
        select: false
    }


}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User
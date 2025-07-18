import { signupSchema, loginSchema } from '../middlewares/validator.js';
import User from '../models/usersModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { error, value } = signupSchema.validate({ email, password })
        if (error) {
            res.status(401).json({success: false, message: error.details[0].message})
        }

        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400).json({success: false, Message: 'User Already registered'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,
            password: hashedPassword
        })

        if (user) {
            user.password = undefined;
            res.status(201).json({
                Meesage: 'User created successfully',
                user
                
            })
        }

    } catch (error) {
        console.log(error)
    }
}

//! login 

const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const { error } = loginSchema.validate({ email, password });
        if (error) {
            return res.status(401).json({
                success: false,
                message: error.details[0].message
            });
        }

        const user = await User.findOne({ email }).select('+password');
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    user: {
                        id: user._id,
                        email: user.email,
                        verified: user.verified
                    }
                },
                process.env.JWT_SECRET,
                { expiresIn: '30m' }
            );
            return res.status(200).json({
                success: true,
                token: token,
                message: 'Logged in successfully'
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Email or password incorrect'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};

//! Logout  
const logout = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Logged out successfully, delete token from client side'
    })
};

// ! Verification code
 
const  sendVerficationCode = async (req, res) => {
    const user = await User.findOne({email})
    if (!user) {
        res.status(404).json({success: false, Message: 'User Does not exist'})
    }
    if (user.verified) {
        res.status(400).json({success: false, Message: 'User is already verified'})
    }

    const code = Math.floor(Math.random() * 1000000).toString();
}


export { signup, login, logout }
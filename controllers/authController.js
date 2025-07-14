import signupSchema from '../middlewares/validator.js';
import User from '../models/usersModel.js'
import bcrypt from 'bcrypt'

const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { error, value } = signupSchema.validate({ email, password })
        if (error) {
            res.status(401).json({success: false, message: error.details[0].message})
        }

        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400).json({success: false, Message: 'User Already register'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,
            password: hashedPassword
        })

        if (user) {
            user.password = undefined;
            res.status(200).json({
                Meesage: 'User created successfully',
                user
                
            })
        }

    } catch (error) {
        console.log(error)
    }
}


export {signup}
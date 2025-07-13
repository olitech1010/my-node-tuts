import Joi from 'joi'

const signupSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(60)
        .required()
        .email({
            tlds: {allow:['com', 'net']},
        }),
    password: Joi.string()
        .min(8)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))      
    
})

export default signupSchema;


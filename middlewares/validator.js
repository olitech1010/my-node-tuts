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
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))      
    
})

const loginSchema = Joi.object({
    email: Joi.string()
        .min(5)
        .max(60)
        .required()
        .email({
            tlds: {allow: ['come', 'net']}
        }),
    password: Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
})

export { signupSchema, loginSchema};


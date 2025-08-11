import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    servce: 'gmail',
    auth: {
        user: process.env.OUTGOING_EMAIL,
        pass: process.env.OUTGOING_EMAIL_PASSWORD
    }
});

export default transport
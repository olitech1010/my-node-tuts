import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import connectDatabase from './config/connect.js'
import authRouter from './routers/authRouter.js'
import errorHander from './middlewares/errorHander.js'
 
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(errorHander)

connectDatabase();

const PORT = process.env.PORT || 300

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})
    


app.use('/api/auth', authRouter)



app.get('/test-server', (req, res)=> {
    res.status(200).json({Message: "Hello App is running"})
})
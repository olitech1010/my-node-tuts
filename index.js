import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import connectDatabase from './config/connect.js'
import connectSerer from './config/server.js'
 
const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

connectDatabase;
connectSerer;


app.get('/', (req, res)=> {
    res.status(200).json({Message: "Hello aapp"})
})
import express from 'express'
const app = express()

const PORT = process.env.PORT || 300

const connectSerer = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default connectSerer;
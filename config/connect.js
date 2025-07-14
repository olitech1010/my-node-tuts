import mongoose from "mongoose";


const connectDatabase = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfully')
        console.log(connect.connection.host)
        console.log(connect.connection.name)
    } catch (error) {
        console.log(error)
    }
}
export default connectDatabase;
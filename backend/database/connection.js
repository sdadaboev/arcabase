import mongoose from 'mongoose'
import 'dotenv/config'
// const { env_MONGO_URI } = process.env
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1/arcabase')

        console.log(`mongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
export default connectDB

import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

const dbConnection = async() =>{

    const MONGODB_ATLAS_URL = `${DATABASE_URL}`
    try{
       await mongoose.connect(MONGODB_ATLAS_URL)
        console.log('connection done')
    }catch(error){
        console.error("error with database connection", error.message)
    }
}

export default dbConnection
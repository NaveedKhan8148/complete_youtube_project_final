import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDB = async ()=>{

    const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n the db are connected :${conectionInstance.connection.host}`)

    try{}catch (error){
        console.log(`DATABASE ARE NOIT`,error)
        process.exit(1)
    }
}

export default connectDB
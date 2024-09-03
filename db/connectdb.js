import mongoose from "mongoose";

const connectDB=async(DB_URL)=>{
    try{
        const DB_OPTIONS={
            dbName:'APICrud'
        }
        await mongoose.connect(DB_URL,DB_OPTIONS)
    }catch(err){
        console.log(err)
    }
}
export default connectDB
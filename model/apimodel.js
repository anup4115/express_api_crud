import mongoose from "mongoose"

const apiSchema=new mongoose.Schema({
    name:{type:String,required:true},
    salary:{type:mongoose.Decimal128,required:true,validate:(val)=>val>=10000},
    email:{type:String,required:true,unique:true},
})

const apiModel=mongoose.model('api_data',apiSchema)

export default apiModel
import apiModel from '../model/apimodel.js'

class ApiCrud{
    static create_api=async(req,res)=>{
        try{
            const result=new apiModel({
                name:req.body.name,
                salary:req.body.salary,
                email:req.body.email,
            })
            await result.save()
            res.send(" Api Created ....")
        }catch(err){
            console.log(err)
        }
    }
    static get_api=async(req,res)=>{
        try{
            const result=await apiModel.find()
            res.send(result)
        }catch(err){
            console.log(err)
        }
    }
    static update_api=async(req,res)=>{
        try{
            const result=await apiModel.findByIdAndUpdate(req.params.id,req.body)
            res.send('api_updated')
        }catch(err){
            console.log(err)
        }
    }
    static delete_api=async(req,res)=>{
        try{
            const result=await apiModel.findByIdAndDelete(req.params.id)
            res.send("Data deleted...")
        }catch(err){
            console.log(err)
        }
    }
}

export default ApiCrud
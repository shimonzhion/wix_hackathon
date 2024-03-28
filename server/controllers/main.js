const getAll = async (req,res,model) => {
      await model.find({})
    // .populate([{path:"publisher" , populate: { path: "classOf" ,populate:{path:"graduates"} }},{"path":"invited"}])
    .then(data=>{
        data.length == 0 ? res.status(300).json({success:false, message:"no data found"}) :
        res.status(200).json({success:true,data})
    })
    .catch((error)=>res.status(400).json({success:false,error}))
   
}
const getById = async (req,res,model) => {
    await model.findById(req.params.id)
    .then((result)=>{
      return result ?  res.status(200).json({success:true,result}):res.status(400).json({success:false,message:"data not found"})
    })
    .catch((error)=>res.status(400).json({success:false,error}))
}
const create = async (req,res,model,func) => {

    const { error } = func(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }  


    await model.insertMany(req.body.data)
    .then((result)=>res.status(200).json({success:true, message:"data added successfully",result}))
    .catch((error)=>{res.status(400).json({success:false,error})})
}
const updateOne = async (req,res,model) => {

    await model.findByIdAndUpdate(req.params.id, req.body.data)
    .then(result=>res.status(200).json({success:true,result}))
    .catch((error)=>res.status(400).json({success:false,error}))
}
const deleteOne = async (req,res,model) => {
     await model.findByIdAndDelete(req.params.id)
    .then((result)=>{ return result? res.status(200).json({success:true , message:"data deleted successfully",result}):
    res.status(404).json({success:false,message:"data not found"})})
    .catch((error)=>res.status(400).json({success:false,error}))
}

module.exports = {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}
const getAll = async (req,res,model) => {
    await model.find({})
  // .populate([{path:"publisher" , populate: { path: "classOf" }},{"path":"invited"}])
  // .then(data=>{
  //     data.length == 0 ? res.status(300).json({success:false, message:"no data found"}) :
  //     res.status(200).json({success:true,data})
  // })
  .then((result)=>{  //I fixed
      return result ?  res.status(200).json({success:true,result}):res.status(404).json({success:false,message:"data not found"})
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
const create = async (req,res,model,validationFunc) => {
  //validate the req content
  const {error} = validationFunc(req.query);
  if(error){
      return res.status(400).json({success:false,error});
  }
  //insert the data into db
  await model.insertMany(req.query)  //I fixed to req.query
  .then((result)=>res.status(200).json({success:true, message:"data added successfully",result}))
  .catch((error)=>{res.status(400).json({success:false,error})})
}
const updateOne = async (req,res,model,validationFunc) => {
  //validate the req content
  const {error} = validationFunc(req.query);
  if(error){
      return res.status(400).json({success:false,error});
  }
  //update the data in db
  await model.findByIdAndUpdate(req.params.id, req.query)
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
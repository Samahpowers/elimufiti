
const userData = (req, res)=>{
    const userId = req.body.userId
    console.log("YOUR USER ID:",userId)
   res.status(200).json(userId)
}
export default userData
require("dotenv").config()
const jwt=require("jsonwebtoken")
const {BadRequest}=require("../errors/index")

const login=async (req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        throw new BadRequest("please provide credentials")
    }

    //this is just a dummy id for testing
    const id=new Date().getDate()

    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}

const dashboard=async (req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello ${req.user.username}`,secret:`here is your auth data ${luckyNumber}`})
}

module.exports={
    dashboard,
    login
}
const express=require('express')
const {User,Account}=require('../db')
const router=express.Router()
const zod=require('zod')
const {authMiddleware}=require('../middleware')
const jwt =require('jsonwebtoken')
const {JWT_SECRET}=require('../config')


const signUpSchema=zod.object({

username:zod.string().email(),
password:zod.string(),
lastname:zod.string(),
firstname:zod.string()
})

router.post('/signup',async (req,res) => {
const {success}=signUpSchema.safeParse(req.body)
if(!success){
   return  res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
}


const user=await User.findOne({
    username:req.body.username
})

if(user){
    return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
    })
}

const createuser=await User.create({
    username:req.body.username,
    password:req.body.password,
    lastname:req.body.lastname,
    firstname:req.body.firstname
})

const userId=createuser._id

await Account.create({
userId,
balance: 1 + Math.random() * 10000
})


const token=jwt.sign({
    userId,
   
}, JWT_SECRET)

 res.json({
    message:"User created successfully",
    token:token
})
})

const signinbody=zod.object({
username:zod.string().email(),
password:zod.string()
})



router.post('/signin', async (req,res)=>{
const {success}=signinbody.safeParse(req.body)

if(!success){
res.status(411).json({
    message:"Invalid inputs"
})
}
const user=await User.findOne({
    username:req.body.username,
    password:req.body.password
})

if(!user){
   res.status(411).json({
    message:"error while logging in"
   }) 
}

const userId=user._id
const token=jwt.sign({
    userId},
    JWT_SECRET
) 

res.status(200).json({
        token: token,
        message:"user signed in succesfully"
})

})




const updateBody=zod.object({
password:zod.string().optional(),
lastname:zod.string().optional(),
firstname:zod.string().optional()
})
router.put('/update',authMiddleware,async(req,res) =>{
const {success} =updateBody.safeParse(req.body)
if(!success){
     res.status(411).json({
        message:"Invalid"
    })
}
await User.updateOne  ( { _id: req.userId }, //filter
req.body  //update
)
   
res.json({
    message:"Updated successfully"
})

})


router.get('/bulk',async(req,res) => {
const filter=req.query.filter || "";
const users= await User.find({
     $or:[{
     firstname:{"$regex":filter}
    },
    {
        lastname:{"$regex" :filter}
    }    
      ]})

res.json({
    user:users.map(user=>({
username:user.username,
firstname:user.firstname,
lastname:user.lastname,
_id:user._id
    }))
})

})














module.exports=router;







//The req.query.filter part extracts the value of the query parameter named "filter" from the URL. In Express.js, the req.query object contains the key-value pairs of the query parameters in the URL.

// For example, if your URL is: /bulk?filter=John, then req.query.filter will be equal to "John".In this context, the URL is part of the frontend code








// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NjUxYjUwOWM4MTkxOTNjMGYwZjQ2M2YiLCJpYXQiOjE3MTY2MzA3OTN9.-7fSt8ZJzJhaAyRGIlociiWT6jQjXzcNLmDKGQRwV4g"
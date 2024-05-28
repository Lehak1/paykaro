const jwt =require('jsonwebtoken')
const {JWT_SECRET}=require('./config')
const authMiddleware=(req,res,next)=>{

const authHeader=req.headers.authorization;
if(!authHeader || !authHeader.startsWith('Bearer')){
    return res.status(403).json({message: 'Forbidden'})
}
const token=authHeader.split(' ')[1];
try{
    const decoded=jwt.verify(token,JWT_SECRET)
if(decoded.userId){
    req.userId=decoded.userId;
    next();
}else{
    return res.status(403).json({msg:"forbidden"});
}
}
catch(error){
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        } else {
          return res.status(403).json({ message: 'Forbidden' });
        }
}
}
module.exports= {authMiddleware}

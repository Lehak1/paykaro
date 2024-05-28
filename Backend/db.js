const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://lehakdutta:uzv4FRPN39uTcpTK@cluster0.0lusav5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{console.log("connected to db")}

const UserSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        maxLength: 50
    }


})



const AccountSchema= new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId, //Reference to User model
required:true,
ref:'User'
},
balance:{
type:Number,
required:true

}
})
const Account=mongoose.model('Account',AccountSchema)
const User=mongoose.model('User',UserSchema)
module.exports={User,Account}

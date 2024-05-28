import {Heading} from "../components/Heading";
import {Subheading} from "../components/Subheading";
import {Button} from "../components/Button";
import {Bottomwarning} from "../components/Bottomwarning"
import {Inputbox} from "../components/Inputbox"
import { useState } from "react";
import axios from "axios";

export const Signup=()=>{
const [firstname,setFirstname] = useState("")
const [lastname,setLastname] = useState("")
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")



    return <div className="h-screen flex bg-sky-500 justify-center">
<div className="flex flex-col justify-center">
    <div className="rounded-lg  bg-white w-80 h-max px-4 p-2 ">
<Heading label={"Sign up"}/>
<Subheading label={"Enter your information to create an account"}/>
<Inputbox label={"First Name"} onChange={(e) => {setFirstname(e.target.value)}} placeholder={"John"}/>
<Inputbox label={"Last Name"} onChange={(e) => {setLastname(e.target.value)}} placeholder={"Doe"}/>
<Inputbox label={"username"} onChange={(e) => {setUsername(e.target.value)}} placeholder={"john@example.com"}/>
<Inputbox label={"Password"} onChange={(e) => {setPassword(e.target.value)}} placeholder={""}/>
<Button label={"Sign Up"} onClick={async() =>{const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
    firstname,
    lastname,
    username,
    password
})
localStorage.setItem("token",response.data.token)
}}/>
<Bottomwarning label={"Already have an account?"} to={'/signin'} buttonText={"Login"}/>



</div>



</div>








    </div>

}
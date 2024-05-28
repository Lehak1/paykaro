import {Heading} from "../components/Heading";
import {Subheading} from "../components/Subheading";
import {Button} from "../components/Button";
import {Bottomwarning} from "../components/Bottomwarning"
import {Inputbox} from "../components/Inputbox"

export const Signin=()=>{

    return <div className="h-screen flex bg-sky-500 justify-center">
<div className="flex flex-col justify-center">
    <div className="rounded-lg  bg-white w-80 h-max px-4 p-2 ">
<Heading label={"Sign In"}/>
<Subheading label={"Enter your credentials to access your account"}/>


<Inputbox label={"Email"} onChange={""} placeholder={"john@example.com"}/>
<Inputbox label={"Password"} onChange={""} placeholder={""}/>
<Button label={"Sign In"} onClick={""}/>
<Bottomwarning label={"Don't have an account?"} to={'/signup'} buttonText={"Sign Up"}/>



</div>



</div>








    </div>

}
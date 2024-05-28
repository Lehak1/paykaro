import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import axios from "axios"
import { useState } from "react";
export function Sendmoney(){
const [searchParams] = useSearchParams();
const  id=searchParams.get("id");
const name=searchParams.get("name")
const[input,setInput]=useState("");
    return <div className="h-screen flex bg-green-300 justify-center">
<div className="flex flex-col justify-center">
<div className="rounded-lg bg-white w-80 h-max px-6 py-6">
<div className="p-4">
<Heading label={"Send Money"}/>
</div>

<div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>


<Inputbox label={"Amount(in Rs)"} onChange={(e) => {setInput(e.target.value)}} placeholder={"Enter amount"}/>
<Button label={"Initiate transfer"} onClick={async () => {await axios.post("http://localhost:3000/api/v1/account/transfer",{
to:id,
amount:input
},{
headers:{
    Authorization:"Bearer " + localStorage.getItem("token"),
}

})}}/>




</div>

</div>

    </div>


}
// import { useEffect, useState } from "react";
import {Appbar} from "../components/Appbar";
import {Balance} from "../components/Balance";
import {Users} from "../components/Users"


export function Dashboard(){
   








    return <>
    <div className="flex flex-col">
    <Appbar/>
<Balance amount={"5000"}/>
<Users />
    </div>




</>

}
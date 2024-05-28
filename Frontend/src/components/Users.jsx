import axios from "axios";
import { Button } from "./Button";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



export function Users(){
    const [users, setUsers] = useState([]);
const [filter,setFilter] =useState("")



    useEffect(()=>{ axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then(response => {
            setUsers(response.data.user)
        })
    },[filter])







return <div className="flex flex-col ml-3">
<div className="text-2xl font-semibold">
Users
</div>
<div className="w-full ">
<input placeholder={"Search users..."} type="text" onChange={(e) =>{setFilter(e.target.value)}} />
</div>
<div>
    {users.map(user => <User user={user}/>)}
</div>


</div>


}



function User({user}){
    const navigate=useNavigate();
return <div className="flex justify-between">
     <div className="flex">
<div className="rounded-full h-12 w-12 flex justify-center mt-1 mr-2">
<div className="flex flex-col h-full text-xl justify-center">
{user.firstname[0]}
</div>
</div>
<div className="flex flex-col justify-center h-full">
<div>
    {user.firstname} {user.lastname}
</div>

</div>

<div className="flex flex-col justify-center h-full">
    <Button label={"Send Money"} onClick={(e) =>{navigate(`/send?id=${user._id}&name=${user.firstname}`)}}/>
</div>

</div>
</div>


}


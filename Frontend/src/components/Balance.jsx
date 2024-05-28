export function Balance({amount}){
return <div className="flex flex-row items-center ml-2 h-14"> 
    <div className="font-bold text-lg mr-2">
Your Balance
    </div>
<div className="font-semibold text-lg"> 
 Rs {amount}
</div>
</div>
}
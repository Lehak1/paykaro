export function Inputbox({label,placeholder,onChange}){
    return <div>
       <div className="text-left py-2">
        {label}
        </div> 
<input onChange={onChange} placeholder={placeholder} className="w-full px-3 py-2 border rounded border-blue-600 "/>
</div>
}
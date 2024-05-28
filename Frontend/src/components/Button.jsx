export function Button({label,onClick}){
    return <button onClick={onClick} type="button" className="w-full text-center bg-sky-600 text-white py-2 mt-2">
{label}
    </button>
}
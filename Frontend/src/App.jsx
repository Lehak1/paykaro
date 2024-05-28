import {BrowserRouter , Routes,Route } from "react-router-dom";
import {Signin} from "./pages/Signin";
import {Signup} from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Sendmoney } from "./pages/Sendmoney";

function App() {
return <>
<BrowserRouter>
<Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/send" element={<Sendmoney/>}/>
    
    

</Routes>
</BrowserRouter>


</>
} 

export default App

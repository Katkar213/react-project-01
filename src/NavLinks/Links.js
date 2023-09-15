
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Home from "../Components/Home"
import Hollywood from "../Components/Hollywood"
import Bollywood from "../Components/Bollywood"
import Fitness from "../Components/Fitness"
import Technology from "../Components/Technology"
import Food from "../Components/Food"
import ContextApi from "../ContextApi/ContextApi"
import Detailpage from "../Components/Detailpage"


function Links(){
    return(
        <>
<BrowserRouter>
<div id="navlink">
    <ul>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Hollywood" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Bollywood" >Bollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Technology">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Fitness">Fitness</NavLink></li>
        <li></li>


</ul>
{/* <div id="icons">
<NavLink id="iconlink"><i className="fa-brands fa-square-instagram" to="https://www.instagram.com/"></i></NavLink>
<NavLink id="iconlink"><i className="fa-brands fa-linkedin"></i></NavLink>
<NavLink id="iconlink"><i class="fa-brands fa-facebook"></i></NavLink>
<NavLink id="iconlink"><i class="fa-brands fa-github"></i></NavLink>
</div> */}

</div>


<ContextApi>
<Routes>
 
 <Route path="/" element={<Home/>}/>
 <Route path="/Hollywood" element={<Hollywood/>}/>
 <Route path="/Bollywood" element={<Bollywood/>}/>
 <Route path="/Technology" element={<Technology/>}/>
 <Route path="/Fitness" element={<Fitness/>}/>
 <Route path="/Food" element={<Food/>}/>
 <Route path="/detailpage" element={<Detailpage/>}/>

     
</Routes>
</ContextApi>

</BrowserRouter>



</>
    )
} 

export default Links
import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Navbar(){
  
return(
// ye links display krne k liye hn
    <nav>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/contact'>Contact</NavLink>
     <NavLink to='/products'>Products</NavLink>
     <NavLink to='/users'>Users</NavLink>
     <NavLink to='/search'>Search</NavLink>



    </nav>

)

}
export default Navbar;
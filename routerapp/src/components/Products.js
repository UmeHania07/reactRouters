import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Products() {
    return (
        <>
        <div>
         <h1>This is My Products Page</h1>
        </div>

        <nav>
        <NavLink to='shirts'>Shirts</NavLink> 
        <NavLink to='jeans'>Jeans</NavLink>
      </nav>

        <Outlet/>

        </>
    )

}

export default Products;




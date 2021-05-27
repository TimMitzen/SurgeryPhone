import React from 'react';
import {NavLink} from 'react-router-dom'
import '../components/Nav.css'
<css></css>
const Nav =()=>{
   return(
      <>
      <NavLink to="/" className ='link'>Home</NavLink>
      <NavLink to = '/Iphone' className ='link'>Iphone</NavLink>
      <NavLink to ='/Traveling' className= 'link'>Traveling</NavLink>
      </>
   );
};

export default Nav;
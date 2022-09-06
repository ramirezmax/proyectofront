import React from 'react'
import "./NavBar.css"
//import { useState } from "react";
//import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
        <div id='menu' className={'navigation'}>
            <div className='logo'>LOGO</div>
            <div>
                <ul>
                   <li>
                    <a href='home'>Home</a>
                   </li>
                   <li>
                    <a href='about'>About</a>
                   </li>
                   <li>
                    <a href='products'>Products</a>
                   </li>
                   <li>
                    <a href='services'>Services</a>
                   </li>
                   <li>
                    <a href='contact'>Contact</a>
                   </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar
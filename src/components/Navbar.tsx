import React from 'react'
import { useState } from "react";
import '../css/navBar.css';
import profilePic from '../img/profilepic.jpg';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">

      <NavLink to="/Home" className="site-title">
        Jacob Tang
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </NavLink>

      <ul>
        <li>
          <NavLink end to="/Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink end to="/Projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink end to="/Resume">
          Resume
          </NavLink>
        </li>
        <li>
          <NavLink end to="/Contacts">
          Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

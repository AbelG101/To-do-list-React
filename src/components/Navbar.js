import React from "react"

import { NavLink } from "react-router-dom"



const Navbar = () => {

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    }, 
    {
      id: 2,
      path: "/about",
      text: "About",
    }
  ]

  return (
    <nav className="navBar">
      <ul className="menuNav">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink 
              className={({isActive}) => (isActive ? 'active-link' : null)}
                to={link.path} 
              >
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )  
}
export default Navbar

import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"


const Nav = ({member}) => {
  return (
    <div >
      <ul className="list-style-type">
        <li><h2>Welcome {member.name}</h2></li>
        <li><Link to="/memberAccount">My Account</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  )
}

export default Nav
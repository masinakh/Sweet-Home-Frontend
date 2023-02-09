import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"


const Nav = ({member}) => {
  return (
    <div >
      {/* <h2>Welcome {member.name}</h2> */}
      <ul className="nav-list-style-type">
        <li><Link to="/memberAccount" className='link'>My Account</Link></li>
        <li><Link to="/" className='link'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Nav
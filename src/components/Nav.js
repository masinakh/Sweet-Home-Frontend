import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({member}) => {
  return (
    <div>
      <ul>
        <li><h2>Welcome {member.name}</h2></li>
        <li><Link to="/memberAccount">My Account</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  )
}

export default Nav
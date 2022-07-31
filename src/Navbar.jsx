import React from 'react'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <img src={logo} alt="logo" width="40" height="35" className="navbar-brand d-inline-block align-text-top" />I am an Open Source Contributor 👨‍💻👩‍💻
            </div>
        </nav>
    </div>
  )
}

export default Navbar
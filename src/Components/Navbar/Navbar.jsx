import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg nav-bg-color">
  <div className="container">
  <Link className="navbar-brand" to="/">
    <img src={logo} className='w-logo' alt="logo" />
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/area">Area</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/ingredients">Ingredients</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}

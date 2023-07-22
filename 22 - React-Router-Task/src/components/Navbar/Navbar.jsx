import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/" class="nav__link">Home</Link>
          </li>
          <li class="nav__item">
          <Link to="/about" class="nav__link">About</Link>
          </li>
          <li class="nav__item">
          <Link to="/project" class="nav__link">Projects</Link>
          </li>
          <li class="nav__item">
          <Link to="/contact" class="nav__link">Contact</Link>
          </li>
        </ul>
      </nav>

  )
}

export default Navbar


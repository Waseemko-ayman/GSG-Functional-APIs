import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { PATHS } from '../router/paths'

const Header = () => {
  return (
    <header className='header'>
      <h2>Stores-APIs-Func-comp</h2>
      <ul>
        <li>
          <NavLink to={PATHS.HOME}>
          {({ isActive }) => (isActive ? <u>Home</u> : "Home")}
          </NavLink>
        </li>
        <li>
          <NavLink to={PATHS.STORES.ROOT}>
            {({ isActive }) => (isActive ? <u>Stores</u> : "Stores")}
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;
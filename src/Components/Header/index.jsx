import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { PATHS } from '../router/paths'
import { useAuthContext } from '../Context/AuthContext'
import { ROLES } from '../Constants'

const Header = () => {
  const {role} = useAuthContext()

  return (
    <header className='header'>
      <h2>Stores-APIs-Func-comp</h2>
      {role === ROLES.GUEST ? 
        <ul>
          <li>
            <NavLink to={PATHS.LOGIN}>
            {({ isActive }) => (isActive ? <u>Login</u> : "Login")}
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.SIGN_UP}>
              {({ isActive }) => (isActive ? <u>Signup</u> : "Signup")}
            </NavLink>
          </li>
        </ul> 
        : (
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
          <li>
            <NavLink to={PATHS.ABOUT}>
              {({ isActive }) => (isActive ? <u>About</u> : "About")}
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.GIFS}>
              {({ isActive }) => (isActive ? <u>Gifs</u> : "Gifs")}
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header;
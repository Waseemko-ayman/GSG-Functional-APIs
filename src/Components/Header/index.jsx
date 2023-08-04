import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'
import { PATHS } from '../router/paths'
import { useAuthContext } from '../Context/AuthContext'
import { ROLES, THEMES } from '../Constants'
import { useThemeContext } from '../Context/ThemeContext'

const Header = () => {
  const {role} = useAuthContext()
  const {theme, toggleTheme} = useThemeContext();

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
          <li>
            <button onClick={toggleTheme} style={theme === THEMES.LIGHT ? 
            {
              backgroundColor: 'black',
              color: 'white',
            } : 
            {
              backgroundColor: 'white',
              color: 'black',
            }}>
              {theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header;
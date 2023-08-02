import React, { useContext } from 'react'
import "./style.css"
import { AuthContext, useAuthContext } from '../../Components/Context/AuthContext'
import { ROLES } from '../../Components/Constants'

const HomePage = () => {
  const data = useAuthContext();
  console.log(data);

  return (
    <div className='home-page'>
      <h1>Hello {data.role} !</h1>
      <button onClick={() => data.setRole(ROLES.ADMIN)}>Be Admin</button>
      <button onClick={() => data.setRole(ROLES.USER)}>Be User</button>
      <button onClick={() => data.setRole(ROLES.GUEST)}>Be Guest</button>
    </div>
  )
}

export default HomePage;
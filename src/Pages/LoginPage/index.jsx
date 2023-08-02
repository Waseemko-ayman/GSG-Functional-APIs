import axios from 'axios';
import React, { useState } from 'react'
import { AUTH_API } from '../../config/api';
import { useAuthContext } from '../../Components/Context/AuthContext';
import { ROLES } from '../../Components/Constants';

const LoginPage = () => {
  const {setUser, setToken, setRole} = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(AUTH_API + "auth/login", formData);
      console.log(res);

      setUser(res.data.data);
      setToken(res.data.data.token);
      setRole(ROLES.USER)
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('role', ROLES.USER)
    } catch (error) {
      console.log(error);
    }
  }

  const hadnleInputChange = ({ target: { value, name } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form>
      <label htmlFor="username">User Name</label>
      <input 
        type="text" 
        id="username" 
        name="username" 
        onChange={hadnleInputChange} 
        value={formData.username}
      />
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        onChange={hadnleInputChange} 
        value={formData.password}
      />
      <button onClick={handleClick}>Log in</button>
    </form>
  )
}

export default LoginPage
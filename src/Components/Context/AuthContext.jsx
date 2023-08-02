import React, { createContext, useContext, useState } from 'react'
import { ROLES } from '../Constants'

export const AuthContext = createContext(null)
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(ROLES.GUEST)

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
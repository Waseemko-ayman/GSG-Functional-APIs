import React from 'react'
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const GuestGuards = ({ role, children }) => {
  if(role === 'user')
    return <Navigate to={PATHS.STORES.ROOT} replace={true} />
  if(role === 'admin')
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />
  return children;
}

export default GuestGuards;
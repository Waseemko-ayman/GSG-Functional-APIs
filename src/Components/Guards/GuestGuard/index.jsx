import React from 'react'
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { ROLES } from '../../Constants';

const GuestGuards = ({ role, children }) => {
  if(role === ROLES.USER)
    return <Navigate to={PATHS.STORES.ROOT} replace={true} />
  if(role === ROLES.ADMIN)
    return <Navigate to={PATHS.ADMIN.ROOT} replace={true} />
  return children;
}

export default GuestGuards;
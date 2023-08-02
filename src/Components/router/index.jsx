import { useRoutes } from 'react-router-dom';
import { routers } from './routes';
import { useState } from 'react';
import { ROLES } from '../Constants';

const Router = () => {
  const [role] = useState(ROLES.USER)

  const router = useRoutes(routers(role));
  return router;
}

export default Router;
import { useRoutes } from 'react-router-dom';
import { routers } from './routes';
import { useState } from 'react';

const Router = () => {

  const [role] = useState("guest")

  const router = useRoutes(routers(role));
  return router;
}

export default Router;
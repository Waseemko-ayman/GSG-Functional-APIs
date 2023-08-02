import { useRoutes } from 'react-router-dom';
import { routers } from './routes';

const Router = () => {
  const router = useRoutes(routers);
  return router;
}

export default Router;
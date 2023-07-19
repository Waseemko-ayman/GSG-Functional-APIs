import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import { PATHS } from './paths';
import StoresPage from '../../Pages/StoresPage';
import StorePage from '../../Pages/StorePage';
import EditStorePage from '../../Pages/EditStorePage';
import CreateStorePage from '../../Pages/CreateStorePage';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      
      <Route path={PATHS.STORES.ROOT} element={<Outlet />}>
        <Route index element={<StoresPage />} />
        <Route path={PATHS.STORES.VIEW} element={<StorePage />} />
        <Route path={PATHS.STORES.EDIT} element={<EditStorePage />} />
        <Route path={PATHS.STORES.CREATE} element={<CreateStorePage />} />
      </Route>

      <Route path={PATHS.ERRORS.NOT_FOUND} element={<h1>Page Not Found</h1>} />
      <Route path='*' element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />} />
    </Routes>
  )
}

export default Router;
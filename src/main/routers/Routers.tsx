import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome } from '../factories/pages/'
import MainLayout from '../../presentation/components/layout/main-layout';
import './Routers.css';
const Router: React.FC = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MakeHome />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  )
}
export default Router;

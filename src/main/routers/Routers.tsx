import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome } from '../factories/pages/'
import './Routers.css';
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;

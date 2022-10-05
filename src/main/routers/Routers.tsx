import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome } from '../factories/pages/'
import UserProvider from '../../domain/context/user-context';
import './index.css'
const Router: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MakeHome />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
export default Router;

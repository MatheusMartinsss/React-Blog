import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MakeHome, MakePost } from '../factories/pages/'
import UserProvider from '../../domain/context/user-context';
import './index.css'
const Router: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MakeHome />} />
          <Route path="/post/:id" element={<MakePost />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
export default Router;

import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom';
function Router() {
  return (
    <Routes>
        <Route path='/'  element={<Home/>}/>
    </Routes>
  )
}

export default Router
import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Menu from './pages/menu/Menu';
function Router() {
  return (
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact'  element={<Contact/>}/>
    </Routes>
  )
}

export default Router
// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home/Home';
import CharPage from './components/charpage/CharPage';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/char' element={<CharPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

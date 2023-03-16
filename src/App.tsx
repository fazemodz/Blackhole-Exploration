import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage'
import RegisterIntrest from './modules/RegisterIntrest'
import Ourend from './modules/Ourend';
import Navbar from './modules/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Register-Intrest" element={<RegisterIntrest />} />
        {/* 
          TODO: Add the other pages
        */}
        <Route path="/Days" element={<RegisterIntrest />} />
        <Route path="/About" element={<RegisterIntrest />} />
        <Route path="/Our-end-Begins" element={<Ourend />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage'
import RegisterIntrest from './modules/RegisterIntrest'
function App() {
  return (
    <>
      <Routes>
        {/* {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Intrested" element={<RegisterIntrest />} />
      </Routes>
    </>
  )
}

export default App

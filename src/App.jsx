import React, { useState, useEffect } from 'react'
import Navbar from './Components/navbar'
import Homepage from './Components/Homepage'
import Schedule from './Components/Schedule'
import Venue from './Components/Venue'
import NotFound from './Components/404';
import Contact from './Components/Contact';
function App() {
  const [ComponentToRender, setComponentToRender] = useState()
  useEffect(() => {
    let FullURL = window.location.href
    let smallURL = ''
    if (FullURL.includes('http://localhost:5173/')) {
       smallURL = FullURL.replace('http://localhost:5173/', '')
    } else {
       smallURL = FullURL.replace('http://192.168.0.164:5173/', '')
    }
    switch (smallURL) {
      case '':
        setComponentToRender('Homepage')
        break
      case 'Schedule':
        setComponentToRender('Schedule')
        break
      case 'Venue':
        setComponentToRender('Venue')
        break
      case 'Contact':
        setComponentToRender('Contact')
        break
      default:
        setComponentToRender('NotFound')
        break
    }
  }, [])

  return (
    <>
      <Navbar />
      {ComponentToRender === 'NotFound' && <NotFound />}
      {ComponentToRender === 'Homepage' && <Homepage />}
      {ComponentToRender === 'Schedule' && <Schedule />}
      {ComponentToRender === 'Venue' && <Venue />}
      {ComponentToRender === 'Contact' && <Contact />}
    </>
  )
}

export default App

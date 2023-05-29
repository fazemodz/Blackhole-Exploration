import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import Homepage from './Components/Homepage.jsx'
import Schedule from './Components/Schedule.jsx'
import Venue from './Components/Venue.jsx'
import NotFound from './Components/404.jsx';
import Contact from './Components/Contact.jsx';
function App() {
  const [ComponentToRender, setComponentToRender] = useState()
  useEffect(() => {
    let FullURL = window.location.href;
    let smallURL = '';
    
    switch (true) {
      case FullURL.includes('http://localhost:5173/'):
        smallURL = FullURL.replace('http://localhost:5173/', '');
        break;
      case FullURL.includes('http://192.168.0.164:5173/'):
        smallURL = FullURL.replace('http://192.168.0.164:5173/', '');
        break;
      case FullURL.includes('https://blackhole-exploration.vercel.app/'):
        smallURL = FullURL.replace('https://blackhole-exploration.vercel.app/', '');
        break;
      case FullURL.includes('https://blackhole-exploration.projectredacted.org'):
        smallURL = FullURL.replace('https://blackhole-exploration.projectredacted.org', '');
        break;
      default:
        smallURL = FullURL;
        break;
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

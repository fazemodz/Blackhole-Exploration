import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage'
import RegisterIntrest from './modules/RegisterIntrest'
import Ourend from './modules/Ourend';
import Navbar from './modules/Navbar';
import { log } from 'console';
function App() {
  const [ComponentToRender, setComponentToRender] = useState<any>()
  useEffect(() => {
    let FullUrl = window.location.href
    console.log(FullUrl)
    // add check for localhost:6969 or production url
    let SmallUrl = FullUrl.replace('http://localhost:6969/', '')
    console.log(SmallUrl)
    switch (SmallUrl) {
      case 'registerintrest':
        setComponentToRender('RegisterIntrest')
        break;
      case 'Register-Intrest':
        setComponentToRender('RegisterIntrest')
        break;
      case 'ourend':
        setComponentToRender('Ourend')
        break;
      default:
        setComponentToRender('Homepage')
        break;
    }
  }, [])
  return (
    <>
      <Navbar />
      {ComponentToRender === 'Homepage' && <Homepage />}
      {ComponentToRender === 'Ourend' && <Ourend />}
      {ComponentToRender === 'RegisterIntrest' && <RegisterIntrest />}

    </>
  )
}

export default App

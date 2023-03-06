import { useEffect, useState } from 'react'
import '../assets/css/homepage.css'
import Homepagevid from '../assets/videos/HomepageVid.mp4'
import EasterEggvid from '../assets/videos/Homepage-vid-Easteregg.mp4'
export default function Homepage() {
  let Number
  const [ShouldEasterEggTrigger, setShouldEasterEggTrigger] = useState(false)
  useEffect(() => {
      document.title = 'Blackhole Exploration | Homepage'
      let Useragent = navigator.userAgent   
      if(Useragent.includes('OPR')){
        console.log('Opera')
      }
      Number = Math.floor(Math.random() * 10) + 1
      console.log(Number);
      if (Number === 7) {
        setShouldEasterEggTrigger(true)
      }
  }, [])
  return (
    <header className="Homepage-container">
      <div className="Homepage-content">
        <div className="Homepage-Video-container">
          {ShouldEasterEggTrigger ?
           <video className="Homepage-Video"src={EasterEggvid} autoPlay muted loop/> 
          : 
          <video className="Homepage-Video"src={Homepagevid} autoPlay muted loop/>}
          
          <div className="Video-Dim"></div>
          </div>
      </div>
    </header>
  )
}

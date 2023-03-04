import { useEffect } from 'react'
import '../assets/css/homepage.css'
import Homepagevid from '../assets/videos/HomepageVid.mp4'
export default function Homepage() {
  useEffect(() => {
      document.title = 'Blackhole Exploration | Homepage'
      let Useragent = navigator.userAgent   
      if(Useragent.includes('OPR')){
        console.log('Opera')
      }
  }, [])
  return (
    <header className="Homepage-container">
      <div className="Homepage-content">
        <div className="Homepage-Video-container">
          <video className="Homepage-Video"src={Homepagevid} autoPlay muted loop/>
          </div>
      </div>
    </header>
  )
}

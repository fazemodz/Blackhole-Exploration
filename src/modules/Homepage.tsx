import { useEffect, useState } from 'react'
import '../assets/css/homepage.css'
import Homepagevid from '../assets/videos/HomepageVid.mp4'
import EasterEggvid from '../assets/videos/Homepage-vid-Easteregg.mp4'
import { Link } from 'react-router-dom'
export default function Homepage() {
  let Number
  const [ShouldEasterEggTrigger, setShouldEasterEggTrigger] = useState(false)
  const[isUseronOpera, setisUseronOpera] = useState(false)
  useEffect(() => {
    document.title = 'Blackhole Exploration | Homepage'
    let Useragent = navigator.userAgent
    if (Useragent.includes('OPR')) {
      setisUseronOpera(true)
    }
    Number = Math.floor(Math.random() * 10) + 1
    console.log(Number);
    if (Number === 7) {
      setShouldEasterEggTrigger(true)
    }
  }, [])
  return (
    <>
      <header className="header index main">
        <div className="pagecontent">
          <h1 className="HomepageTittle">Blackhole</h1>
          <h1 className="HomepageTittle">Exploration</h1>
        </div>
      </header>
      <section className="section video-background">
        <div className="background-vid">
          <div className="dim">
          <video src={Homepagevid}autoPlay muted loop/>
          </div>
          </div>
      </section>
    </>
  )
}

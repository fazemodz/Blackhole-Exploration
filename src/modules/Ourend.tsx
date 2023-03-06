import React from 'react'
import thewitnessarival from '../assets/videos/lfl-endbegins-loop.mp4'
import '../assets/css/ourend.css'
export default function Ourend() {
    React.useEffect(() => {
        document.title = 'The Witness is here Our End Begins Now'
    }, [])
    return (
        <div className="the-witness-arival">
            <div className="the-witness-arival-content">
                <video className="the-witness-arival-video" src={thewitnessarival} autoPlay muted loop/>
            </div>
        </div>
    )
}

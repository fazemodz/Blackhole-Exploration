import { useState, useEffect } from 'react'
export default function Navbar() {
    const [CurentPageURL, setCurentPageURL] = useState()
    useEffect(() => {
        let FullURL = window.location.href
        let URL = FullURL.replace('http://localhost:5173/', '')
        setCurentPageURL(URL)
        console.log(CurentPageURL)
    }, [CurentPageURL])
    return (
        <>
            {/* ========== Header ========== */}
            <header id="header" className="d-flex align-items-center ">
                <div className="container-fluid container-xxl d-flex align-items-center">

                    <div id="logo" className="me-auto">
                        <h1><a href="/"><span>Blackhole Explorations</span></a></h1>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            {CurentPageURL != '/' ? <li><a className="nav-link scrollto" href="/">Home</a></li> :
                                <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            }
                            {CurentPageURL != 'Schedule' ? <li><a className="nav-link" href="/Schedule">Schedule</a></li> :
                                <li><a className="nav-link active " href="/Schedule">Schedule</a></li>}
                            {CurentPageURL != 'Venue' ? <li><a className="nav-link" href="/Venue">Venue</a></li> :
                                <li><a className="nav-link active " href="/Venue">Venue</a></li>}
                            <li><a className="nav-link" href="/Contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle">
                          
                        </i>
                    </nav>
                    <a className="buy-tickets scrollto" href="#buy-tickets">Buy Tickets</a>

                </div>
            </header>
        </>
    )
}

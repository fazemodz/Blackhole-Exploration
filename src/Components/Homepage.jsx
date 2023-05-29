import React from 'react'

export default function () {
    return (
        <>
            <section id="hero">
                <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="mb-4 pb-0">The Annual<br /><span>Space Exploration</span> Conference</h1>
                    <p className="mb-4 pb-0">10-12 December, ExCeL London, London</p>
                    <a href="#about" class="about-btn scrollto">About The Event</a>
                </div>
            </section>
            <main id="main">
                <section id="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>About Blackhole Exploration</h2>
                                <p>Blackhole Explorations specializes in space tourism and collaborate with other space companies to provide the technologies required to make space tourism possible, such as space craft, propulsion, communications, launch sites, and launch technologies. </p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Where</h3>
                                <p>Royal Victoria Dock, 1 Western Gateway, London E16 1XL</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>When</h3>
                                <p>Monday to Wednesday<br />10-12 December</p>
                            </div>
                        </div>
                    </div>
                </section></main>
        </>
    )
}

import React from 'react'
import Image1 from '../assets/images/Venue/external001.jpeg'
import Image2 from '../assets/images/Venue/30d220ab36820dc38d5c899e0b4028ad.jpg'
import Image3 from '../assets/images/Venue/173218.jpg'
import Image4 from '../assets/images/Venue/487903b7b91d628ebba6912585e7049a.jpg'
export default function () {
    return (
        <>
            <section id="venue">

                <div className="container-fluid" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Event Venue</h2>
                        <p>Event venue location info and gallery</p>
                    </div>

                    <div className="row g-0">
                        <div className="col-lg-6 venue-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.259223503093!2d0.02765731576999916!3d51.508460079635356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a80ce609e50d%3A0xa0de5f705d7aec7!2sExCeL%20London!5e0!3m2!1sen!2suk!4v1685012593516!5m2!1sen!2suk" frameborder="0" style={{border:0}} allowFullScreen></iframe>
                        </div>

                        <div className="col-lg-6 venue-info">
                            <div className="row justify-content-center">
                                <div className="col-11 col-lg-8 position-relative">
                                    <h3>ExCeL London</h3>
                                    <p>ExCeL London is an international exhibition and convention centre in the Custom House area of Newham, East London. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid venue-gallery-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-0">

                        <div className="col-lg-3 col-md-4">
                            <div className="venue-gallery">
                                <a href={Image1} className="glightbox" data-gall="venue-gallery">
                                    <img src={Image1} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="venue-gallery">
                                <a href={Image2} className="glightbox" data-gall="venue-gallery">
                                    <img src={Image2} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="venue-gallery">
                                <a href={Image3} className="glightbox" data-gall="venue-gallery">
                                    <img src={Image3} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="venue-gallery">
                                <a href={Image4} className="glightbox" data-gall="venue-gallery">
                                    <img src={Image4} alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

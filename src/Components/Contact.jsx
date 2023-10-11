import React from 'react'

export default function Contact() {
    return (
        <>
            <section id="faq">

                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>F.A.Q </h2>
                    </div>

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-9">

                            <ul className="faq-list">

                                <li>
                                    <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What is the Blackhole Explorations Conference about?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        The Blackhole Explorations Conference is a three-day event dedicated to promoting awareness and understanding of space tourism. It will showcase cutting-edge technologies from various companies, provide insightful talks by keynote speakers, and present peer-reviewed research papers. It's an excellent opportunity for delegates to learn more about the future of space travel and network with industry leaders.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">How can I register for the conference?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        You can register for the conference directly on our website. Simply create an account, select the type of pass you want (1-day, 2-day, or 3-day), and complete your payment online. You'll receive an email confirmation once your registration is successful.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Are there any discounts available for the conference?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        Yes, we offer discounted rates for students and groups. Detailed pricing information is available on our website's registration page.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Will the conference sessions be available for live streaming?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        Yes, selected sessions and presentations will be available for live streaming. Registered users will have access to these live streams. Please note that access to live streams may be subject to additional charges.
                                        
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Which companies will be showcasing their technologies at the conference? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        The Blackhole Explorations Conference will feature a wide range of companies that are making significant strides in the field of space tourism and associated technologies. Here is a list of companies that will be showcasing their technologies at the event:                  
                                        <br/><br/>Brilliant Optics: Specializing in space photography.
                                            <br/>Veeger Intergalactic: Known for their space technology and tourism solutions.
                                            <br/>Enterprise Travels Limited: A leader in space tourism.
                                            <br/> Reliant Ventures Incorporated: They focus on space funding for tourism.
                                            <br/> Defiant Space Exploration: Another renowned player in the space tourism industry.
                                            <br/> Grissom Galaxy Trips: Providers of unique space tourism experiences.
                                            <br/> Rocket XN Ltd: Innovators of reusable booster rockets for low earth orbit.
                                            <br/>Asteroid Miners: Pioneers in mining for minerals and resources in space.
                                        </p>
                                    
                                    </div>
                                </li>

                                <li>
                                    <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">How can I submit my research paper for the conference? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                                    <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                        You can submit your research paper through our website. There is a submission fee of £200. All papers will go through a review process, and if accepted, you will be invited to present your paper on Day 3 of the conference. Please visit the "Paper Submission" section of our website for more details and to submit your paper.
                                        </p>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
                <section id="contact" className="section-bg">

                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <p>For any queries, please contact us using the form below.</p>
                        </div>

                        <div className="row contact-info">

                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <address>Kwangya, Beyond the FLAT</address>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="bi bi-phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="">N/A</a></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email</h3>
                                    <p><a href="">N/A</a></p>
                                </div>
                            </div>

                        </div>

                        <div className="form">
                            <form >
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}

import React from 'react'

export default function Schedule() {
    return (
        <>
            <section id="schedule" className="section-with-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Event Schedule</h2>
                        <p>Here is our event schedule</p>
                    </div>

                    <ul className="nav nav-tabs" role="tablist" data-aos="fade-up" data-aos-delay="100">
                        <li className="nav-item">
                            <a className="nav-link active" href="#day-1" role="tab" data-bs-toggle="tab">Day 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#day-2" role="tab" data-bs-toggle="tab">Day 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#day-3" role="tab" data-bs-toggle="tab">Day 3</a>
                        </li>
                    </ul>

                    <h3 className="sub-heading"></h3>
                    {/* day 1 */}
                    <div className="tab-content row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>09:00AM - 10:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Keynote <span>Professor Bill Kirk (Lecturer in Physiology and Biochemistry, University of Aberdeen)</span></h4>
                                    <p>Subject: The Physical Demands of Space Travel</p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>10:00 AM - 11:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Presentation <span>James Scott (Reliant Ventures Incorporated)</span></h4>
                                    <p>Subject: Making Space Travel Accessible</p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:00 AM - 11:30 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                                   
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:30 AM - 12:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Presentation  <span>Christine Barrett (Grissom Galaxy Trips )</span></h4>
                                    <p>Safety in Space </p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>12:30 PM - 13:30 PM  </time></div>
                                <div className="col-md-10">
                                    <h4>Lunch </h4>
                        
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>13:30 PM – 14:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p>Safety in Space</p>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>14:30 PM – 15:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p>The Physical Demands of Space Travel</p>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>15:30 PM – 16:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                        
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>16:00 PM – 17:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p> Making Space Travel Accessible</p>
                                </div>
                            </div>

                        </div>
                        {/* day 2 */}
                        <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

                        <div className="row schedule-item">
                                <div className="col-md-2"><time>09:00AM - 10:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Keynote <span>Professor Bill Kirk (Lecturer in Physiology and Biochemistry, University of Aberdeen  )</span></h4>
                                    <p>Subject: History of Space Travel</p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>10:00 AM - 11:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Keynote <span>Professor Janice Witney (Senior Lecturer in Engineering and Aeronautical Science, Oxfordshire University  )</span></h4>
                                    <p>Subject: To the Moon and beyond</p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:00 AM - 11:30 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                                   
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:30 AM - 12:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Presentation  <span>Dr Jenny Kim (Chief Technical Officer, Rocket XN Ltd.)</span></h4>
                                    <p>Raising capita </p>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>12:30 PM - 13:30 PM  </time></div>
                                <div className="col-md-10">
                                    <h4>Lunch </h4>
                        
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>13:30 PM – 14:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p>History of Space Travel</p>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>14:30 PM – 15:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p>To the Moon and beyond</p>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>15:30 PM – 16:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                        
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>16:00 PM – 17:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Workshop </h4>
                                    <p> Raising capital</p>
                                </div>
                            </div>

                        </div>
                        {/* day 3 */}
                        <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>09:00AM - 10:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Research paper 1 and peer review workshop </h4>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>10:00 AM - 11:00 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Research paper 2 and peer review workshop </h4>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:00 AM - 11:30 AM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                                   
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>11:30 AM - 12:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Research paper 3 and peer review workshop </h4>
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>12:30 PM - 13:30 PM  </time></div>
                                <div className="col-md-10">
                                    <h4>Lunch </h4>
                        
                                </div>
                            </div>

                            <div className="row schedule-item">
                                <div className="col-md-2"><time>13:30 PM – 14:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Research paper 4 and peer review workshop  </h4>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>14:30 PM – 15:30 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Research paper 5 and peer review workshop  </h4>
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>15:30 PM – 16:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Refreshments</h4>
                        
                                </div>
                            </div>
                            <div className="row schedule-item">
                                <div className="col-md-2"><time>16:00 PM – 17:00 PM</time></div>
                                <div className="col-md-10">
                                    <h4>Conference Summary </h4>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

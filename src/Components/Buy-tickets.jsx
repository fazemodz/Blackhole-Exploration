import React from 'react'

export default function Buytickets() {
    return (
        <section id="buy-tickets" className="section-with-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Buy Tickets</h2>
                    </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">1 Day</h5>
                                <h6 className="card-price text-center">£100</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                                    <li><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Community Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Lunch</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Discount on research paper</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="1-day">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">2 Days</h5>
                                <h6 className="card-price text-center">£150</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                                    <li><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Lunch</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Discount on research paper</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="2-days">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">3 days</h5>
                                <h6 className="card-price text-center">£250</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                                    <li><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fa fa-times"></i></span>Lunch</li>
                                    <li><span className="fa-li"><i className="fa fa-times"></i></span>Discount on research paper</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#buy-ticket-modal" data-ticket-type="premium-access">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Note: These are the prices for the extras if they are not included in your ticket: Lunch £25 Submission of research papers £200

</li>
                </div>

            </div>
            <div id="buy-ticket-modal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Buy Tickets</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method="POST" action="#">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="your-name" placeholder="Your Name" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="your-email" placeholder="Your Email" />
                                </div>
                                <div className="form-group mt-3">
                                    <select id="ticket-type" name="ticket-type" className="form-select">
                                        <option value="">-- Select Your Ticket Type --</option>
                                        <option value="standard-access">1 Day</option>
                                        <option value="pro-access">2 Days</option>
                                        <option value="premium-access">3 Days</option>
                                    </select>
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn">Buy Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

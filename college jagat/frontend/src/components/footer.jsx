import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../style/footer.scss'

const footer = () => {
  return (
    <>
    <footer className="footer-section">
        <div className="footer-container">
            <div className="footer-cta pt-4">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                        <i className='bx bxs-map' ></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Indore - Ujjain Road Gram Baroli, Indore, Madhya Pradesh 453111</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                        <i className='bx bxs-phone'></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+91 62660 61914</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                        <i className='bx bx-envelope-open'></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>Abhyudaya@svvv.edu.in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="index.html">About SVVV</Link>
                            </div>
                            <div className="footer-text">
                                <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university in Indore, Madhya Pradesh, India. It was established in 2015.Shri Vaishnav Vidyapeeth Vishwavidyalaya at Indore is a multi-disciplinary university focusing on the needs of various segments of the society.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="#"><i className='bx bxl-instagram'></i></Link>
                                <Link to="#"><i className='bx bxl-github'></i></Link>
                                <Link to="#"><i className='bx bxl-twitter'></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/academiccalender">Academic Calender</Link></li>
                                <li><Link to="/newsfeed">News Feed</Link></li>
                                <li><Link to="/busboard">Bus Board</Link></li>
                                <li><Link to="/events">Clubs And Events</Link></li>
                                <li><Link to="/lostandfound">Lost And Found</Link></li>
                                <li><Link to="/attendancecalc">Calculate Attendance</Link></li>
                                <li><Link to="/feedbackform">Feedback Form</Link></li>
                                <li><Link to="/communitychat">Community Chat</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button id="send-btn"><i className='bx bxl-telegram'></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="footer-container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/newsfeed">News Feed</Link></li>
                                <li><Link to="/feedbackform">Feedback</Link></li>
                                <li><Link to="/contactus">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer

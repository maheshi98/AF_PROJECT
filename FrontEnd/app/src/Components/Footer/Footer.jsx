import React, { Component } from 'react';
import logo from 'url:~/src/Assets/new.png';
import { GoLocation, GoMail } from "react-icons/go";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoMdCall } from "react-icons/io";
import './FooterStyles.css';

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <div>
            //     <footer className="footer-distributed">
            //         <div className="footer-left">
            //             <h3>" International Conference on Application Frameworks - <br />ICAF "</h3>
            //             {/* <p className="footer-links">
            //                 <a href="#" className="link-1">Home</a>
            //                 <a href="#">Blog</a>
            //                 <a href="#">Pricing</a>
            //                 <a href="#">About</a>
            //                 <a href="#">Faq</a>
            //                 <a href="#">Contact</a>
            //             </p> */}
            //             {/* <p className="footer-company-name">Organized with ❤️ by video nerds around the world</p> */}
            //         </div>
            //         <div className="footer-center">
            //             <div>
            //                 <i><GoLocation /></i>
            //                 <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            //             </div>
            //             <div>
            //                 <i><IoMdCall /></i>
            //                 <p>+1.555.555.5555</p>
            //             </div>
            //             <div>
            //                 <i><GoMail /></i>
            //                 <p><a href="mailto:support@company.com">support@icaf.com</a></p>
            //             </div>
            //         </div>
            //         <div className="footer-right">
            //             <p className="footer-company-about">
            //                 <span>Connect with us</span>
            //                 {/* Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. */}
            //             </p>
            //             <div className="footer-icons">
            //                 <a href="#"><i><IoLogoFacebook /></i></a>
            //                 <a href="#"><i><IoLogoTwitter /></i></a>
            //                 <a href="#"><i><IoLogoLinkedin /></i></a>
            //                 <a href="#"><i><IoLogoGithub /></i></a>
            //             </div>
            //             <p className="footer-company-name">Organized with ❤️ by conference nerds around the world</p>
            //         </div>
            //     </footer>
            // </div>

            // <div>
            //     <div id='contact'>
            //         <div className='container'>
            //             <div className='col-md-8'>
            //                 <div className='row'>
            //                     <div className='section-title'>
            //                         <h2>Get In Touch</h2>
            //                         <p>
            //                             Please fill out the form below to send us an email and we will
            //                             get back to you as soon as possible.
            //     </p>
            //                     </div>
            //                     <form name='sentMessage' validate >
            //                         <div className='row'>
            //                             <div className='col-md-6'>
            //                                 <div className='form-group'>
            //                                     <input
            //                                         type='text'
            //                                         id='name'
            //                                         name='name'
            //                                         className='form-control'
            //                                         placeholder='Name'
            //                                         required

            //                                     />
            //                                     <p className='help-block text-danger'></p>
            //                                 </div>
            //                             </div>
            //                             <div className='col-md-6'>
            //                                 <div className='form-group'>
            //                                     <input
            //                                         type='email'
            //                                         id='email'
            //                                         name='email'
            //                                         className='form-control'
            //                                         placeholder='Email'
            //                                         required

            //                                     />
            //                                     <p className='help-block text-danger'></p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                         <div className='form-group'>
            //                             <textarea
            //                                 name='message'
            //                                 id='message'
            //                                 className='form-control'
            //                                 rows='4'
            //                                 placeholder='Message'
            //                                 required

            //                             ></textarea>
            //                             <p className='help-block text-danger'></p>
            //                         </div>
            //                         <div id='success'></div>
            //                         <button type='submit' className='btn btn-custom btn-lg'>
            //                             Send Message
            //     </button>
            //                     </form>
            //                 </div>
            //             </div>
            //             <div className='col-md-3 col-md-offset-1 contact-info'>
            //                 <div className='contact-item'>
            //                     <h3>Contact Info</h3>
            //                     <p>
            //                         <span>
            //                             <i className='fa fa-map-marker'></i> Address
            //     </span>
            //                         adress
            //                     </p>
            //                 </div>
            //                 <div className='contact-item'>
            //                     <p>
            //                         <span>
            //                             <i className='fa fa-phone'></i> Phone
            //     </span>{' '}
            //                        phone
            //                     </p>
            //                 </div>
            //                 <div className='contact-item'>
            //                     <p>
            //                         <span>
            //                             <i className='fa fa-envelope-o'></i> Email
            //     </span>{' '}
            //                         email
            //                     </p>
            //                 </div>
            //             </div>
            //             <div className='col-md-12'>
            //                 <div className='row'>
            //                     <div className='social'>
            //                         <ul>
            //                             <li>
            //                                 <a>
            //                                     <i className='fa fa-facebook'></i>
            //                                 </a>
            //                             </li>
            //                             <li>
            //                                 <a >
            //                                     <i className='fa fa-twitter'></i>
            //                                 </a>
            //                             </li>
            //                             <li>
            //                                 <a >
            //                                     <i className='fa fa-youtube'></i>
            //                                 </a>
            //                             </li>
            //                         </ul>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div id='footer'>
            //         <div className='container text-center'>
            //             <p>
            //                 &copy; 2021 ICAF{' '}
            //                 <a href='http://www.icaf.com' rel='nofollow'>
            //                     ICAF
            // </a>
            //             </p>
            //         </div>
            //     </div>
            // </div>

            <footer class="footer-section">
                <div class="container">
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-5">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img
                                            src={logo}
                                            class="img-fluid"
                                            alt="logo"
                                            height="80"
                                            width="130"
                                        /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>
                                            Welcome to SLIIT FOSS community. We're a group of volunteers who
                                            believe in the usage of Free/Open Source Software (FOSS)
                                        </p>
                                    </div>
                                    <div class="footer-social-icon">
                                        <span>Connect with us</span>

                                        <a href="https://www.facebook.com/sliitfoss" target="_blank"
                                        ></a>
                                        <a href="https://www.instagram.com/sliitfoss" target="_blank"
                                        ></a>
                                        <a href="https://twitter.com/fosssliit?lang=en" target="_blank"
                                        ></a>
                                        <a
                                            href="https://lk.linkedin.com/company/sliit-foss-community"
                                            target="_blank"
                                        ></a>
                                        <a
                                            href="https://www.youtube.com/channel/UCPPO-QR0Dv13ewjhPsc_I3w/featured"
                                            target="_blank"
                                        ></a>
                                    </div>
                                </div>
                            </div >
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <a
                                                routerLink="/"
                                            >Home</a
                                            >
                                        </li>
                                        <li><a href="https://github.com/sliit-foss">GitHub</a></li>
                                        <li>
                                            <a
                                                routerLink="/contact"
                                            >Contact</a
                                            >
                                        </li>
                                        <li>
                                            <a href="http://leaderboard.sliitfoss.org/" target="_blank"
                                            >Leaderboard</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                routerLink="/blog"
                                            >Blog</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                target="_blank"
                                                href="https://github.com/sliit-foss/brand-assets"
                                            >
                                                Brand Assets
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                outerLink="/event"
                                            >Events</a
                                            >
                                        </li >
                                        <li>
                                            <a
                                                href="https://github.com/sliit-foss/sliitfoss/blob/master/README.md"
                                            >
                                                Contribution Guidelines</a
                                            >
                                        </li>
                                        <li><a routerLink="/code-conduct">Code of Conduct</a></li>
                                        <li>
                                            <a
                                                href="https://github.com/sliit-foss/assets/blob/main/reports/SLIIT%20FOSS%20Annual%20Report%202020-21.pdf"
                                                target="_blank"
                                            >Annual Report 2020</a
                                            >
                                        </li>
                                    </ul >
                                </div >
                            </div >
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>
                                            Don’t forget to subscribe to our news letters, enter your e-mail
                                            here.
                                        </p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form>
                                            <input type="text" id="email" placeholder="Email Address" />
                                            <button><i class="fa fa-envelope-o"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>
                                        Copyright &copy; 2021 | All Rights Reserved
                                        <a href="https://sliitfoss.org">SLIIT FOSS</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >

        );
    }
}
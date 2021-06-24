import React, { Component } from 'react';
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

            <div>
                <div id='contact'>
                    <div className='container'>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='section-title'>
                                    <h2>Get In Touch</h2>
                                    <p>
                                        Please fill out the form below to send us an email and we will
                                        get back to you as soon as possible.
                </p>
                                </div>
                                <form name='sentMessage' validate >
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                                    className='form-control'
                                                    placeholder='Name'
                                                    required

                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    id='email'
                                                    name='email'
                                                    className='form-control'
                                                    placeholder='Email'
                                                    required

                                                />
                                                <p className='help-block text-danger'></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <textarea
                                            name='message'
                                            id='message'
                                            className='form-control'
                                            rows='4'
                                            placeholder='Message'
                                            required

                                        ></textarea>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                    <div id='success'></div>
                                    <button type='submit' className='btn btn-custom btn-lg'>
                                        Send Message
                </button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-3 col-md-offset-1 contact-info'>
                            <div className='contact-item'>
                                <h3>Contact Info</h3>
                                <p>
                                    <span>
                                        <i className='fa fa-map-marker'></i> Address
                </span>
                                    adress
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-phone'></i> Phone
                </span>{' '}
                                   phone
                                </p>
                            </div>
                            <div className='contact-item'>
                                <p>
                                    <span>
                                        <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                                    email
                                </p>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='social'>
                                    <ul>
                                        <li>
                                            <a>
                                                <i className='fa fa-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                                <i className='fa fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a >
                                                <i className='fa fa-youtube'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='footer'>
                    <div className='container text-center'>
                        <p>
                            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
                            <a href='http://www.templatewire.com' rel='nofollow'>
                                TemplateWire
            </a>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}
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
            <div>
                <section>
                    <h1>Event venue</h1>
                </section>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <h3>" International Conference on Application Frameworks - <br />ICAF "</h3>
                        {/* <p className="footer-links">
                            <a href="#" className="link-1">Home</a>
                            <a href="#">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </p> */}
                        {/* <p className="footer-company-name">Organized with ❤️ by video nerds around the world</p> */}
                    </div>
                    <div className="footer-center">
                        <div>
                            <i><GoLocation /></i>
                            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                        </div>
                        <div>
                            <i><IoMdCall /></i>
                            <p>+1.555.555.5555</p>
                        </div>
                        <div>
                            <i><GoMail /></i>
                            <p><a href="mailto:support@company.com">support@icaf.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>Connect with us</span>
                            {/* Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. */}
                        </p>
                        <div className="footer-icons">
                            <a href="#"><i><IoLogoFacebook /></i></a>
                            <a href="#"><i><IoLogoTwitter /></i></a>
                            <a href="#"><i><IoLogoLinkedin /></i></a>
                            <a href="#"><i><IoLogoGithub /></i></a>
                        </div>
                        <p className="footer-company-name">Organized with ❤️ by conference nerds around the world</p>
                    </div>
                </footer>
            </div>
        );
    }
}
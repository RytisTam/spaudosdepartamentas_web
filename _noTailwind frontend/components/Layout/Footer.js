import React, { Component } from 'react';
import Link from 'next/link';
import { getStrapiMedia } from "../../lib/media";
import Image from 'next/image'


class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src={getStrapiMedia(this.props.logo_white)} width={this.props.logo_white.data.attributes.width / 3} height={this.props.logo_white.data.attributes.height / 3}/>
                                    </Link>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>

                                <ul className="services-list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="support-list">
                                    <li>
                                        <Link href="/faq">
                                            <p>FAQs</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <p>Privacy Policy</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <p>Terms & Conditions</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    <li>Location: <span>6th Floor, Elegant Tower, York, USA</span></li>
                                    <li>Email: <span>hello@hepro.com</span></li>
                                    <li>Phone: <span>+0 (321) 984 754</span></li>
                                </ul>

                                <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" >
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" >
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" >
                                            <i className="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" >
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} Hepro. Designed by <a href="http://envytheme.com/" >EnvyTheme</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__limiter">
                <div className="footer__links">
                    <ul className="footer__links__company">
                        <h4>Company</h4>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Cookie policy</a>
                        </li>
                    </ul>
                    <ul className="footer__links__resources">
                        <h4>Resources</h4>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Refer a friend</a>
                        </li>
                        <li>
                            <a href="#">Research updates</a>
                        </li>
                        <li>
                            <a href="#">Blue Poop Challenge</a>
                        </li>
                        <li>
                            <a href="#">ZOE Health Study</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    <div className="copyrighted">
        <p>&#169;2022ZOE Limited</p>
    </div>
        </>
    );
}

export default Footer;

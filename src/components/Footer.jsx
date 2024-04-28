import React from 'react';

function Footer() {
    const facebook = "/public/logo-sm/logo-facebook.jpg";
    const instagram = "/public/logo-sm/logo-instagram.jpg";
    const github = "/public/logo-sm/logo-github.jpg";
    const linkedin = "/public/logo-sm/logo-linkedin.jpg";

    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <img className="sm-logo" src={facebook} alt="Facebook" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <img className="sm-logo" src={instagram} alt="Instagram" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <img className="sm-logo" src={github} alt="GitHub" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <img className="sm-logo" src={linkedin} alt="LinkedIn" />
                </a></li>
            </ul>
            <p>&copy;2024 Karim BSoltane | No Rights Reserved 😂</p>
        </footer>
    );
}

export default Footer;

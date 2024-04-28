import React from 'react';
import logos from "../../public/logo-sm/index"

function Footer() {
    const facebook = "/public/logo-sm/logo-facebook.jpg";
    const instagram = "/public/logo-sm/logo-instagram.jpg";
    const github = "/public/logo-sm/logo-github.jpg";
    const linkedin = "/public/logo-sm/logo-linkedin.jpg";

    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/lkormi">
                    <img className="sm-logo" src="https://i.pinimg.com/564x/2b/79/51/2b7951ca3923b28a9e77518b19d1ea46.jpg" alt="Facebook" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/karim_ben_soltane/">
                    <img className="sm-logo" src="https://i.pinimg.com/564x/98/7a/43/987a435a0b0c3b3868ac0eca06e91965.jpg" alt="Instagram" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/SoltaneKarim">
                    <img className="sm-logo" src="https://i.pinimg.com/564x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg" alt="GitHub" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/karim-soltane-416085290/">
                    <img className="sm-logo" src="https://i.pinimg.com/564x/8a/15/b6/8a15b646a6856d20854c2ac22623d971.jpg" alt="LinkedIn" />
                </a></li>
            </ul>
            <p>&copy;2024 Karim BSoltane | No Rights Reserved 😂</p>
        </footer>
    );
}

export default Footer;

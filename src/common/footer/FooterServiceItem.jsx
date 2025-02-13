import React from 'react';
import { footerServiceLinks } from '../../data/CommonData/CommonData';
import { HashLink } from 'react-router-hash-link';

const FooterServiceItem = () => {
    return (
        <div className="footer-item">
            <h6 className="footer-item__title">Rezervacija</h6>
            <ul className="footer-menu">
                {footerServiceLinks.map((footerServiceLink, index) => (
                    <li className="footer-menu__item" key={index}>
                        <HashLink smooth to={footerServiceLink.link} className="footer-menu__link">
                            {footerServiceLink.text}
                        </HashLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterServiceItem;

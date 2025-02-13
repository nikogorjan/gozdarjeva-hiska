import React from 'react';
import { footerUsefulLinks } from '../../data/CommonData/CommonData';
import { HashLink } from 'react-router-hash-link';

const FooterUsefulItem = () => {
    return (
        <div className="footer-item ms-xl-5">
            <h6 className="footer-item__title">Povezave</h6>
            <ul className="footer-menu">
                {footerUsefulLinks.map((footerUsefulLink, index) => (
                    <li className="footer-menu__item" key={index}>
                        <HashLink smooth to={footerUsefulLink.link} className="footer-menu__link">
                            {footerUsefulLink.text}
                        </HashLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterUsefulItem;

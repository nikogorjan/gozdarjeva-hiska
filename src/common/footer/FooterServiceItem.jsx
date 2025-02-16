import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export const footerServiceLinks = [ 
    {
        text: 'footerService.link1', // translation key for "booking.com"
        link: 'https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847'
    },
    {
        text: 'footerService.link2', // translation key for "Kontakt"
        link: '#kontakt'
    }
];

const FooterServiceItem = () => {
    const { t } = useTranslation();

    return (
        <div className="footer-item">
            <h6 className="footer-item__title">{t("footerService.title")}</h6>
            <ul className="footer-menu">
                {footerServiceLinks.map((footerServiceLink, index) => (
                    <li className="footer-menu__item" key={index}>
                        <HashLink smooth to={footerServiceLink.link} className="footer-menu__link">
                            {t(footerServiceLink.text)}
                        </HashLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterServiceItem;

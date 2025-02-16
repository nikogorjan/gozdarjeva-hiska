import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export const footerUsefulLinks = [
  {
    text: 'footerUseful.link1', // translation key for "Mnenja strank"
    link: '#stranke'
  },
  {
    text: 'footerUseful.link2', // translation key for "Pogosta vprašanja"
    link: '#vprasanja'
  }
];

const FooterUsefulItem = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-item ms-xl-5">
      <h6 className="footer-item__title">{t("footerUseful.title")}</h6>
      <ul className="footer-menu">
        {footerUsefulLinks.map((footerUsefulLink, index) => (
          <li className="footer-menu__item" key={index}>
            <HashLink smooth to={footerUsefulLink.link} className="footer-menu__link">
              {t(footerUsefulLink.text)}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterUsefulItem;

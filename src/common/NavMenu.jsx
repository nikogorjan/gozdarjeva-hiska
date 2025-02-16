import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

export const navMenus = [
  {
    text: "nav.customerReviews",
    path: "#stranke",
  },
  {
    text: "nav.faq",
    path: "#vprasanja",
  },
  {
    text: "nav.contact",
    path: "#kontakt",
  },
  {
    text: "nav.reservation",
    path: "https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847",
  },
];

const NavMenu = (props) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  const handleDropdownOpen = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className={`nav-menu flx-align ${props.navMenusClass}`}>
      {navMenus.map((navMenu, index) => {
        const isActiveNavMenu = location.pathname === navMenu.path;
        const isActiveSubMenu = navMenu.submenus && navMenu.submenus.some(sub => location.pathname === sub.path);
        const isActivePage = isActiveNavMenu || isActiveSubMenu;
        const LinkComponent = navMenu.path.startsWith('#') ? HashLink : NavLink;

        return (
          <li
            className={`nav-menu__item ${navMenu.submenus?.length > 0 ? 'has-submenu' : ''} ${isActivePage ? 'activePage' : ''}`}
            key={index}
            onClick={() => handleDropdownOpen(index)}
          >
            <LinkComponent smooth to={navMenu.path} className="nav-menu__link">
              {t(navMenu.text)}
            </LinkComponent>
            {navMenu.submenus && navMenu.submenus.length > 0 && (
              <ul className="nav-submenu">
                {navMenu.submenus.map((submenu, subIndex) => (
                  <li
                    className={`nav-submenu__item ${location.pathname === submenu.path ? 'activePage' : ''}`}
                    key={subIndex}
                  >
                    <NavLink to={submenu.path} className="nav-submenu__link">
                      {t(submenu.text)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;

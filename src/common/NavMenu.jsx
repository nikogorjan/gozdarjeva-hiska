import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navMenus } from '../data/CommonData/CommonData';

const NavMenu = (props) => {
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

                // If the path starts with '#' we use HashLink for smooth scrolling
                const LinkComponent = navMenu.path.startsWith('#') ? HashLink : NavLink;

                return (
                    <li
                        className={`nav-menu__item ${navMenu.submenus?.length > 0 ? 'has-submenu' : ''} ${isActivePage ? 'activePage' : ''}`}
                        key={index}
                        onClick={() => handleDropdownOpen(index)}
                    >
                        <LinkComponent smooth to={navMenu.path} className="nav-menu__link">
                            {navMenu.text}
                        </LinkComponent>
                        {navMenu.submenus && navMenu.submenus.length > 0 && (
                            <ul className="nav-submenu">
                                {navMenu.submenus.map((submenu, subIndex) => (
                                    <li
                                        className={`nav-submenu__item ${location.pathname === submenu.path ? 'activePage' : ''}`}
                                        key={subIndex}
                                    >
                                        <NavLink to={submenu.path} className="nav-submenu__link">
                                            {submenu.text}
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

import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhiteImage from '../../public/assets/images/logo/logo.svg';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={LogoWhiteImage} alt="Logo" className='w-small'/>
            </Link>   
        </>
    );
};

export default LogoWhite;
import React from 'react';
import '../../public/assets/css/logo.css'
import LogoImg from '../../public/assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Logo" className='w-small'/>
            </Link>
        </>
    );
};

export default Logo;    
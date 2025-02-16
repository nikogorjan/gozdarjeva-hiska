import React from 'react';
import LogoWhite from '../LogoWhite';
import { useTranslation } from 'react-i18next';

const FooterLogoDesc = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="footer-item__logo">
                <LogoWhite />
            </div>
            <p className="footer-item__desc">
                {t("footerLogoDesc.desc")}
            </p>
        </>
    );
};

export default FooterLogoDesc;

import React from 'react';
import BottomFooterLinks from './footer/BottomFooterLinks';
import { useTranslation } from 'react-i18next';
import './FooterBottom.css'
const FooterBottom = (props) => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className={`bottom-footer ${props.footerClass}`}>
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text">
                             {t("footerBottom.text", { year: new Date().getFullYear() })}
                        </p>
                        <BottomFooterLinks/>
                        <a className='izdelal' href="https://www.nikogorjan.com/">
  <span className='white'>{t("footerBottom.izdelal")}</span>{' '}{t("footerBottom.author")}
</a>                        </div>
                </div>
            </div>   
        </>
    );
};

export default FooterBottom;

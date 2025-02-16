import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../src/i18n';

const BannerFive = () => {
    const { t } = useTranslation();

    return (
        <section className="banner-five banner bg-white">
            <div className="container container-two">
            <div className="row gy-4">
  <div className="col-lg-6 order-2 order-lg-1">
    <div className="banner-inner position-relative">
      <div className="banner-content">
        {/*<span className="banner-content__subtitle text-uppercase font-14">{t('vt')}</span>*/}
        <h1 className="banner-content__title">{t('uz')}</h1>
        <p className="banner-content__desc font-18">{t('pu')}</p>
        <div className="banner-content__button">
          <Link to="https://www.booking.com/hotel/si/gozdarjeva-hiska-m-amp-k.sl.html?aid=356980&label=Share-ekKMUUa%401739115847" className="btn btn-main fw-normal">
            {t('re')}
            <span className="icon-right">
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="col-lg-6 order-1 order-lg-2">
    <div className="banner-five__thumb">
      <img src="assets/images/my-images/h18.jpg" alt=""/>
    </div>
  </div>
</div>
            </div>
        </section>
    );
};

export default BannerFive;
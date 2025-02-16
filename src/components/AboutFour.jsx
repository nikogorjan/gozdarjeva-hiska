import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AboutFourThumb from '../../public/assets/images/my-images/h32.jpg';

const AboutFour = () => {
    const { t } = useTranslation();

    return (
        <section className="about-four padding-t-120 padding-b-60">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-heading style-left">
                                <span className="section-heading__subtitle bg-white">
                                    <span className="text-gradient fw-semibold">
                                        {t("aboutFour.subtitle")}
                                    </span>
                                </span>
                                <h2 className="section-heading__title">
                                    {t("aboutFour.title")}
                                </h2>
                                <p className="section-heading__desc font-18">
                                    {t("aboutFour.desc")}
                                </p>
                            </div>
                            <ul className="check-list">
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text fw-normal text-body font-16">
                                        {t("aboutFour.check1")}
                                    </span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text fw-normal text-body font-16">
                                        {t("aboutFour.check2")}
                                    </span>
                                </li>
                                <li className="check-list__item d-flex align-items-center">
                                    <span className="icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text fw-normal text-body font-16">
                                        {t("aboutFour.check3")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-four-thumb about-three-thumb">
                            <div className="about-three-thumb__inner text-end">
                                <img src={AboutFourThumb} alt=""/>
                                <div className="project-content">
                                    <div className="project-content__inner">
                                        <h2 className="project-content__number text-gradient"> 9.9 </h2>
                                        <span className="project-content__text font-12">
                                            {t("aboutFour.ratingText")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFour;

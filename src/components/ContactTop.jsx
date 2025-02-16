import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const contactTopInfos = [
    {
        icon: <i className="fas fa-paper-plane"></i>,
        title: 'contactTop.email', // translation key
        textOne: 'gozdarjeva.hisa@gmail.com',
        textTwo: '',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        title: 'contactTop.location', // translation key
        text: 'Dobrovnik 302a, Dobrovnik, Slovenia'
    },
    {
        icon: <i className="fas fa-phone"></i>,
        title: 'contactTop.phone', // translation key
        textOne: '031 328 584',
        textTwo: '',
        link: 'tel:'
    },
];

const ContactTop = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id='kontakt' className="contact-top padding-y-120">
                <div className="container container-two">
                    <div className="section-heading">
                        <span className="section-heading__subtitle bg-gray-100">
                            <span className="text-gradient fw-semibold">
                                {t("contactTop.sectionSubtitle")}
                            </span>
                        </span>
                        <h2 className="section-heading__title">
                            {t("contactTop.sectionTitle")}
                        </h2>
                    </div>
                    <div className="row gy-4">
                        {contactTopInfos.map((contactTopInfo, contactTopInfoIndex) => {
                            return (
                                <div className="col-lg-4 col-sm-6" key={contactTopInfoIndex}>
                                    <div className="contact-card">
                                        <span className="contact-card__icon">
                                            {contactTopInfo.icon}
                                        </span>
                                        <h5 className="contact-card__title">
                                            {t(contactTopInfo.title)}
                                        </h5>
                                        {contactTopInfo.link ? (
                                            <>
                                                <p className="contact-card__text font-18">
                                                    <Link to={`${contactTopInfo.link}${contactTopInfo.textOne}`} className="link">
                                                        {contactTopInfo.textOne}
                                                    </Link>
                                                </p>
                                                {contactTopInfo.textTwo && (
                                                    <p className="contact-card__text font-18">
                                                        <Link to={`${contactTopInfo.link}${contactTopInfo.textTwo}`} className="link">
                                                            {contactTopInfo.textTwo}
                                                        </Link>
                                                    </p>
                                                )}
                                            </>
                                        ) : (
                                            <p className="contact-card__text font-18">
                                                {contactTopInfo.text}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactTop;

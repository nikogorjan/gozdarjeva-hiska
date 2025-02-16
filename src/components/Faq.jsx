import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FaqAccordion from '../common/FaqAccordion';
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id='vprasanja' className="faq padding-y-120 bg-white">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-6 pe-xl-5">

                            <SectionHeading
                                headingClass="section-heading style-left"
                                subtitle={t("sectionHeadingFaq.subtitle")}
                                subtitleClass=""
                                title={t("sectionHeadingFaq.title")}
                                renderDesc={false}
                                desc={t("sectionHeadingFaq.desc")}
                                renderButton={false}
                                renderBesideDesc={false}
                                buttonClass="btn-main"
                                buttonText={t("sectionHeadingFaq.buttonText")}
                            />

                            <FaqAccordion accordionClass="" itemClass="" />

                        </div>
                        <div className="col-lg-6  d-lg-block d-none">
                            <div className="faq-thumb">
                                <img src="assets/images/my-images/h11.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
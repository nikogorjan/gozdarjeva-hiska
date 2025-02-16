import React, { useState } from 'react';
import FaqItem from '../components/items/FaqItem';
import { useTranslation } from 'react-i18next';




const FaqAccordion = (props) => {
    const { t } = useTranslation();
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    // Build FAQs array using translation keys
    const faqs = [
        {
            id: 1,
            btnText: t('faqs.1.btnText'),
            bodyText: t('faqs.1.bodyText')
        },
        {
            id: 2,
            btnText: t('faqs.2.btnText'),
            bodyText: t('faqs.2.bodyText')
        },
        {
            id: 3,
            btnText: t('faqs.3.btnText'),
            bodyText: t('faqs.3.bodyText')
        },
        {
            id: 4,
            btnText: t('faqs.4.btnText'),
            bodyText: t('faqs.4.bodyText')
        },
        {
            id: 5,
            btnText: t('faqs.5.btnText'),
            bodyText: t('faqs.5.bodyText')
        }
    ];

    
    const handleAccordionClick = (faqId) => {
        setActiveAccordion(activeAccordion === faqId ? null : faqId); 
    }
    
    return (
        <>
            <div className={`common-accordion accordion ${props.accordionClass}`}>
                {
                    faqs.map((faq, faqIndex) => {
                        return (
                            <FaqItem 
                                itemClass={props.itemClass}
                                faq={faq} 
                                key={faqIndex}   
                                faqIndex={faqIndex}
                                activeAccordion={activeAccordion}
                                handleAccordionClick={handleAccordionClick}
                            />
                        )
                    })
                }
            </div>   
        </>
    );
};

export default FaqAccordion;
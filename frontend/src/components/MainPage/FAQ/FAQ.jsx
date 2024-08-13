import React from 'react';
import './FAQ.scss';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import AccordionFilled from '../../AccordionFilled/AccordionFilled';
import { mainFAQ } from '../../../utils/FAQs';

const FAQ = () => {
  return (
    <div className="faq">
      <SectionTitle>
        Frequently asked <span className='section__title-text--gold'>questions</span>
      </SectionTitle>

      <div className="faq__list">
        <div className="faq__list-wrapper">
          <AccordionFilled
            items={mainFAQ}
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ
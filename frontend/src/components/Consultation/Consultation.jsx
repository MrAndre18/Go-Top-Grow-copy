import React, { useContext } from 'react';
import './Consultation.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import AccordionOutlined from '../AccordionOutlined/AccordionOutlined';
import { consultationSteps } from '../../utils/consultationSteps';
import ContactForm from '../ContactForm/ContactForm';
import { main_consultation_ContactUs_static } from '../../utils/formsInputs';
import CircleDecor from '../UI/CircleDecor/CircleDecor';
import { AppContext } from '../../context/context';

const Consultation = () => {
  const { contactForm } = useContext(AppContext)

  return (
    <div className='consultation'>
      <div className="consultation__header">
        <SectionTitle
          subtitle={
            <h3 className="f-h4 consultation__subtitle">
              Please provide us with your contact details so&#160;that our team can reach out&#160;to&#160;you and&#160;discuss the&#160;specifics of&#160;your situation
            </h3>
          }
        >
          Get a&#160;<span className='section__title-text--gold'>free consultation</span> from an&#160;expert
        </SectionTitle>
      </div>

      <div className="consultation__body" style={{ position: 'relative' }}>
        <CircleDecor
          color='grey'
          blur={280}
          style={{
            width: '500px',
            right: 0,
            top: 0
          }}
        />

        <div className="consultation__form">
          <div className="consultation__form-wrapper">
            <ContactForm
              fields={main_consultation_ContactUs_static}
              setFormData={contactForm.setData}
              isLoading={contactForm.isLoading}
              error={contactForm.error}
              responseReceived={contactForm.responseReceived}
            />
          </div>
        </div>

        <div className="consultation__steps">
          <AccordionOutlined
            items={consultationSteps}
          />
        </div>
      </div>
    </div>
  )
}

export default Consultation;
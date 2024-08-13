import React, { useEffect, useRef } from 'react';
import './ContactForm.scss';
import LinkCircle from '../UI/Links/LinkCircle/LinkCircle';
import { ReactComponent as TelegramLogo } from '../../assets/images/svg/social_media/telegram.svg';
import { ReactComponent as WhatsappLogo } from '../../assets/images/svg/social_media/whatsapp.svg';
import InputField from '../UI/InputField/InputField';
import Btn from '../UI/buttons/Btn/Btn';
import NavbarLink from '../UI/Links/NavbarLink/NavbarLink';

const ContactForm = ({
  title,
  submitBtnText = "Get a consultation",
  fields,
  setFormData,
  isLoading,
  error,
  responseReceived
}) => {
  const
    formRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()

    setFormData({
      name: formRef.current.elements.name.value,
      phone_number: formRef.current.elements.phone.value,
      email: formRef.current.elements.email.value,
    })
  }

  useEffect(() => {
    !error && responseReceived && formRef.current.reset()
  }, [error, responseReceived])

  return (
    <div className='contact-form'>
      {title &&
        <h3 className="f-h3 contact-form__title">{title}</h3>
      }
      <form
        ref={formRef}
        className='contact-form__body'
        onSubmit={submitHandler}
      >
        {fields.map(field =>
          <div key={field.id} className="contact-form__field">
            <InputField
              type={field.type}
              name={field.name}
              id={field.id}
              text={field.text}
              required={field.required}
              autocomplete={field.autocomplete}
            />
          </div>
        )}

        <div className="contact-form__submit">
          <Btn text={submitBtnText} isLoading={isLoading} />

          <div className="f-subtitle-1 contact-form__submit-subtitle">
            By clicking the button, you agree to
            <NavbarLink
              link={{
                path: '#',
                name: 'the processing of personal data'
              }}
            />
          </div>
        </div>

      </form>

      {/* <div className="contact-form__social">
        <p className="f-body-2 contact-form__social-text">
          You can start a dialogue in a messenger that is convenient for you
        </p>

        <div className="contact-form__social-links">
          <LinkCircle
            path='https://t.me/gotopgrowuae'
            img={<TelegramLogo />}
          />

          <LinkCircle
            path='https://wa.me/971582919857'
            img={<WhatsappLogo />}
          />
        </div>
      </div> */}
    </div>
  )
}

export default ContactForm
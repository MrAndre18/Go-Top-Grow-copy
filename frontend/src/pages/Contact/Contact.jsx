import React from 'react';
import { Helmet } from 'react-helmet';
import './Contact.scss';
import { SITE_ROOT } from '../../API/URLs';
import Contacts from '../../components/Contacts/Contacts';
import Consultation from '../../components/Consultation/Consultation';
import PageHero from '../../components/PageHero/PageHero';
import heroImg from '../../assets/images/contact-us/mail.png';

const Contact = () => {
  return (
    <main className="page contact-us">
      <Helmet>
        <link rel="canonical" href={`${SITE_ROOT}/contact-us`} />
      </Helmet>

      <section
        className="content section contact-us__hero"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <PageHero
          title='Do you want to start a business in the UAE?'
          desc='Schedule a complimentary consultation with one of our experts in company formation now and discover all the essential information you need to know about launching your own business in the UAE'
          img={
            <img src={heroImg} alt="contact us" />
          }
        />
      </section>

      {/* <section
        className="content section contact-us__contacts"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Contacts />
      </section> */}

      <section
        className="content section contact-us__consultation"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Consultation />
      </section>
    </main>
  )
}

export default Contact;
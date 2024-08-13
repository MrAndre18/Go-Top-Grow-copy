import React from 'react';
import './Main.scss';
import FirstScreen from '../../components/MainPage/FirstScreen/FirstScreen';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from '../../components/Services/Services';
import SetupProcess from '../../components/SetupProcess/SetupProcess';
import Benefits from '../../components/Benefits/Benefits';
import Contacts from '../../components/Contacts/Contacts';
import FAQ from '../../components/MainPage/FAQ/FAQ';
import Consultation from '../../components/Consultation/Consultation';
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';
import CircleDecor from '../../components/UI/CircleDecor/CircleDecor';
import { Helmet } from 'react-helmet';
import { SITE_ROOT } from '../../API/URLs';
import { useMediaQuery } from '@mui/material';

const Main = () => {
  const
    // size_1200 = useMediaQuery('(max-width:1200px)'),
    size_1024 = useMediaQuery('(max-width:1024px)'),
    size_768 = useMediaQuery('(max-width:768px)')

  return (
    <main className="main">
      <Helmet>
        <link rel="canonical" href={SITE_ROOT} />
      </Helmet>

      <section
        className="section main-first-screen"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <FirstScreen />
      </section>

      <section
        className="content section main-about"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <SectionTitle>
          Who <span className='section__title-text--gold'>we are</span>
        </SectionTitle>

        <AboutUs />

        <CircleDecor
          color='dark-green'
          style={{
            width: size_768 ? 300 : size_1024 ? 400 : 550,
            right: 0,
            top: size_768 ? 'auto' : 0,
            bottom: size_768 ? '10%' : 'auto',
          }}
          blur={size_768 ? 150 : 200}
        />
      </section>

      <section
        className="content section main__services"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <SectionTitle>
          Our services for <span className='section__title-text--gold'>organizing a&#160;business in&#160;the&#160;UAE</span>
        </SectionTitle>

        <Services />
      </section>

      <section
        className="content section main__process"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <SetupProcess />
      </section>

      <section
        className="content section main__benefits"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Benefits />
      </section>

      <section
        className="content section main__consultation"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Consultation />
      </section>

      <section
        className="content section main__faq"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <FAQ />
      </section>

      {/* <section
        className="content section main__contacts"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Contacts />
      </section> */}

    </main>
  );
};

export default Main;
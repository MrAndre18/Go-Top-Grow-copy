import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../src/assets/styles/app.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import { AppContext } from './context/context';
import Footer from './components/Footer/Footer';
import 'overlayscrollbars/overlayscrollbars.css';
import ToTopBtn from './components/UI/buttons/ToTopBtn/ToTopBtn';
import GridColumns from './components/GridColumns/GridColumns';
import { useFetchingPostStatused } from './hooks/useFetchingPostStatused';
import { fetchUrls } from './API/URLs';
import Modal from './components/Modal/Modal';
import FormStatus from './components/FormStatus/FormStatus';
import { ContactForm_modal } from './utils/formsInputs';
import ContactForm from './components/ContactForm/ContactForm';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import SideMenu from './components/SideMenu/SideMenu';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const App = () => {
  const
    location = useLocation(),

    // Header
    [headerMenuIsOpen, setHeaderMenuIsOpen] = useState(false),
    size_960 = useMediaQuery('(max-width:960px)'),
    [isMobile, setIsMobile] = useState(size_960),

    // Search queries
    [lawSearchQuery, setLawSearchQuery] = useState(''),

    // Language
    [language, setLanguage] = useState(null),

    // Contact form
    [openContactModal, setOpenContactModal] = useState(false),
    [openStatusModal, setOpenStatusModal] = useState(false),
    [contactFormData, setContactFormData] = useState({}),
    [contactFormIsLoading, contactFormError, contactFormResponseReceived] =
      useFetchingPostStatused(fetchUrls.contact, contactFormData, Object.keys(contactFormData).length > 0),

    // Scroll
    scrollOptions = {
      overflow: {
        x: 'hidden',
      },
      scrollbars: {
        autoHide: 'scroll',
        autoHideDelay: 2000
      },
    },
    [scrollInitialize, scrollInstance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

  useEffect(() => {
    scrollInitialize(document.body)
  }, [scrollInitialize])

  useEffect(() => {
    setHeaderMenuIsOpen(false)
  }, [location.pathname]);

  useEffect(() => {
    setIsMobile(size_960);
  }, [size_960])

  useEffect(() => {
    if (openContactModal || openStatusModal || headerMenuIsOpen)
      scrollInstance().options({
        overflow: {
          x: 'hidden',
          y: 'hidden'
        }
      }, false)
  }, [openContactModal, openStatusModal, headerMenuIsOpen, scrollInstance])

  useEffect(() => {
    contactFormResponseReceived === true && setOpenStatusModal(true);
  }, [contactFormResponseReceived])

  useEffect(() => {
    !contactFormError &&
      contactFormResponseReceived === true &&
      openContactModal === true &&
      setOpenContactModal(false)
  }, [contactFormError, contactFormResponseReceived])

  return (
    <div className="app">
      <AppContext.Provider
        value={{
          language, setLanguage,

          // Header state
          headerMenuIsOpen, setHeaderMenuIsOpen,

          // Search queries
          lawSearchQuery, setLawSearchQuery,

          // contact form
          contactForm: {
            setOpenModal: setOpenContactModal,
            setData: setContactFormData,
            isLoading: contactFormIsLoading,
            error: contactFormError,
            responseReceived: contactFormResponseReceived
          }
        }}
      >
        <Wrapper>
          {/* <Loader /> */}

          {/* <GridColumns /> */}

          <Header isMobile={isMobile} />

          <Outlet /> {/* <== Routings content is placed here */}

          <Footer />

          <ToTopBtn />

          <Modal
            open={openContactModal}
            setOpen={setOpenContactModal}
          >
            <ContactForm
              title="Get a free consultation from an expert"
              fields={ContactForm_modal}
              setFormData={setContactFormData}
              isLoading={contactFormIsLoading}
              error={contactFormError}
              responseReceived={contactFormResponseReceived}
            />
          </Modal>
          <Modal
            open={openStatusModal}
            setOpen={setOpenStatusModal}
            closeDelay={10 * 1000}
          >
            <FormStatus
              error={contactFormError}
            />
          </Modal>

          <SideMenu
            className='mobile-menu'
            open={headerMenuIsOpen}
            setOpen={setHeaderMenuIsOpen}
            orientation='right'
          >
            <MobileNavbar />
          </SideMenu>
        </Wrapper>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import Logo from '../UI/logo/Logo';
import Navbar from '../Navbar/Navbar';
import { pages, services } from '../../utils/navigation';
import './Footer.scss';
import NavbarLink from '../UI/Links/NavbarLink/NavbarLink';
import LinkCircle from '../UI/Links/LinkCircle/LinkCircle';

import { ReactComponent as VkLogo } from '../../assets/images/svg/social_media/vk.svg';
import { ReactComponent as InstLogo } from '../../assets/images/svg/social_media/instagram.svg';
import { ReactComponent as TelegramLogo } from '../../assets/images/svg/social_media/telegram.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/images/svg/social_media/youtube.svg';
import { AppContext } from '../../context/context';

const Footer = () => {
  const { contactForm } = useContext(AppContext)

  return (
    <footer className="footer">
      <div className="content footer__body">
        <div className="footer__content">

          <div className="footer__contacts">
            <div className="footer__logo">
              <Logo href='/' />
            </div>

            <div className="footer__contacts-list">
              <a href="mailto:info@gotopgrow.com" className='f-h4 footer__contacts-link footer__contacts-mail'>
                info@gotopgrow.com
              </a>

              {/* <a href="tel:+971582919857" className='f-h4 footer__contacts-link footer__contacts-phone'>
                +971 58 291 9857
              </a>
              <a href="tel:+74957988786" className='f-h4 footer__contacts-link footer__contacts-phone'>
                +7 495 798 87 86
              </a>

              <p className="f-subtitle-1 footer__contacts-time">
                from 9:00 to 18:00 UTC +4
              </p> */}
            </div>
          </div>

          <div className="footer__navigation">
            <div className="footer__links">
              <p className="f-h3 footer__links-title">Links</p>

              <Navbar navigation={pages} activeLinks={false} />
            </div>

            <div className="footer__links">
              <p className="f-h3 footer__links-title">Services</p>

              <Navbar navigation={services} activeLinks={false} />
            </div>
          </div>
        </div>

        <div className="footer__contact-us">
          <p className="f-h3 footer__contact-us-text">
            How can we help?
            <NavbarLink
              link={{
                path: '#',
                name: 'Contact Us'
              }}

              onClick={e => {
                e.preventDefault()
                contactForm.setOpenModal(true)
              }}
            />
          </p>

          {/* <div className="footer__contact-us-media">
            <LinkCircle
              path='https://vk.com/gotopgrow'
              img={<VkLogo />}
            />

            <LinkCircle
              path='https://www.instagram.com/go.top.grow/'
              img={<InstLogo />}
            />

            <LinkCircle
              path='https://t.me/gotopgrowuae'
              img={<TelegramLogo />}
            />

            <LinkCircle
              path='https://www.youtube.com/@gotopgrow'
              img={<YoutubeLogo />}
            />
          </div> */}
        </div>

        <div className="footer__privacy">
          <p className="f-body-1 footer__privacy-copyrights">
            © Go Top Grow 2024
          </p>

          <NavbarLink
            link={{
              path: '/privacy_policy',
              name: 'Privacy policy'
            }}
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
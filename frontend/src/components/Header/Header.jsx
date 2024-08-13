import React, { useContext, useState } from 'react';
import Logo from '../UI/logo/Logo';
import Burger from '../UI/burger/Burger';
import Navbar from '../Navbar/Navbar';
import { pages } from '../../utils/navigation';
import './Header.scss';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { AppContext } from '../../context/context';
import Btn from '../UI/buttons/Btn/Btn';

const Header = ({ isMobile }) => {
  const
    { scrollY } = useScroll(),
    [isScrolled, setIsScrolled] = useState(false),
    { contactForm } = useContext(AppContext),
    { headerMenuIsOpen, setHeaderMenuIsOpen } = useContext(AppContext)

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest ?
      setIsScrolled(true) :
      setIsScrolled(false)
  })

  return (
    <header className={`header${isMobile ? ' header--mobile' : ''}${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="header__bg" />

      <div className="content header__body">

        {!isMobile &&
          <div className="header__contacts">
            <div className="header__contacts-body">
              <div className="header__contacts-links">
                <a href="mailto:info@gotopgrow.com" className='f-body-1 header__contacts-link'>
                  info@gotopgrow.com
                </a>

                {/* <a href="tel:+971582919857" className='f-body-1 header__contacts-link'>
                  +971 58 291 9857
                </a> */}
              </div>

              <div className="header__contacts-btn">
                <Btn
                  text='Get a free consultation'
                  onClick={() => contactForm.setOpenModal(true)}
                  size='sm'
                />
              </div>
            </div>
          </div>
        }

        <div className="header__content">
          <div className="header__logo">
            <Logo />
          </div>

          {isMobile &&
            <div className="header__burger">
              <Burger
                isActive={headerMenuIsOpen}
                onClick={() => setHeaderMenuIsOpen(!headerMenuIsOpen)}
              />
            </div>
          }

          {!isMobile &&
            <div className="header__navbar">
              <Navbar navigation={pages} />
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
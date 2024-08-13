import React, { useContext } from 'react';
import './MobileNavbar.scss';
import { pages } from '../../utils/navigation';
import Navbar from '../Navbar/Navbar';
import Btn from '../UI/buttons/Btn/Btn';
import { AppContext } from '../../context/context';

const MobileNavbar = () => {
  const
    { contactForm } = useContext(AppContext)

  return (
    <div className='mobile-nav'>
      <div className="mobile-nav__content">
        <Navbar navigation={pages} />
      </div>

      <div className="mobile-nav__contacts">
        <div className="mobile-nav__contacts-links">
          <a href="mailto:info@gotopgrow.com" className='f-body-1 mobile-nav__contacts-link'>
            info@gotopgrow.com
          </a>

          <a href="tel:+971582919857" className='f-body-1 mobile-nav__contacts-link'>
            +971 58 291 9857
          </a>
        </div>

        <div className="mobile-nav__contacts-btn">
          <Btn
            text='Get a free consultation'
            onClick={() => contactForm.setOpenModal(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
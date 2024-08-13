import React, { useContext } from 'react';
import './AboutUs.scss';
import Btn from '../UI/buttons/Btn/Btn';
import staffImg from '../../assets/images/about/staff.jpg';
import { AppContext } from '../../context/context';

const AboutUs = () => {
  const { contactForm } = useContext(AppContext)

  return (
    <div className='about' style={{ position: 'relative' }}>
      <div className="about__body">
        <div className="about__image">
          <img className="about__image-img" src={staffImg} alt="staff" />
        </div>

        <div className="about__content">
          <div className="about__desc">
            <p className="f-body-1 about__paragraph">
              We help entrepreneurs to open businesses in the UAE, scale up and get all the benefits of cooperation with international markets.
            </p>
            <p className="f-body-1 about__paragraph">
              We provide comprehensive services for your business: from consulting to solving legal problems of any complexity on a turnkey basis, regardless of niche, scale and your goals.
            </p>
            <p className="f-body-1 about__paragraph">
              It doesn't matter if you are an aspiring entrepreneur or an experienced businessman, our goal is to provide everything you need to successfully start or expand your business in the United Arab Emirates.
            </p>
          </div>

          <div className="about__button">
            <Btn
              text='Consultation'
              onClick={() => contactForm.setOpenModal(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
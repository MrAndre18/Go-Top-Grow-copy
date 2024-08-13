import React from 'react';
import './Contacts.scss';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import LinkCircle from '../UI/Links/LinkCircle/LinkCircle';

import { ReactComponent as VkLogo } from '../../assets/images/svg/social_media/vk.svg';
import { ReactComponent as InstLogo } from '../../assets/images/svg/social_media/instagram.svg';
import { ReactComponent as TelegramLogo } from '../../assets/images/svg/social_media/telegram.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/images/svg/social_media/youtube.svg';
import CircleDecor from '../UI/CircleDecor/CircleDecor';
import { useMediaQuery } from '@mui/material';

const Contacts = () => {
  const
    size_1024 = useMediaQuery('(max-width:1024px)'),
    size_768 = useMediaQuery('(max-width:768px)')

  return (
    <div className='contacts' style={{position: 'relative'}}>
      <SectionTitle>
        Our&#160;<span className='section__title-text--gold'>contacts</span>
      </SectionTitle>

      <CircleDecor
        color='dark-green'
        blur={size_768 ? 120 : 160}
        style={{
          height: size_768 ? 200 : size_1024 ? 300 : '100%',
          left: '25%',
          top: 0
        }}
      />

      <div className="contacts__body">
        <div className="contacts__content">

          <div className="contacts__info">
            <div className="contacts__info-links">
              <div className="contacts__info-link info-link">
                <span className="f-body-2 info-link__title">Email</span>
                <a href="mailto:info@gotopgrow.com" className="f-h4 info-link__text info-link__link">
                  info@gotopgrow.com
                </a>
              </div>

              <div className="contacts__info-link info-link">
                <span className="f-body-2 info-link__title">Working hours</span>
                <p className="f-h4 info-link__text">
                  from 9:00 to 18:00 UTC +4
                </p>
              </div>
            </div>

            <div className="contacts__info-phones">
              <a className='f-h3 contacts__info-phone' href="tel:+971582919857">
                +971 58 291 9857
              </a>
              <a className='f-h3 contacts__info-phone' href="tel:+74957988786">
                +7 495 798 87 86
              </a>
            </div>
          </div>

          <div className="contacts__media">
            <p className="f-h4 contacts__media-text">
              Follow the latest news and updates on social networks
            </p>

            <div className="contacts__media-links">
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
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contacts;
import React, { useContext } from 'react';
import './FirstScreen.scss';
import firstScreenVideo from "../../../assets/images/main/main_bg.mp4";
import Btn from '../../UI/buttons/Btn/Btn';
import { AppContext } from '../../../context/context';

const FirstScreen = () => {
  const { contactForm } = useContext(AppContext)

  return (
    <div className='first-screen'>
      <video
        className='first-screen__video'
        autoPlay
        muted
        loop>
        <source
          src={firstScreenVideo}
          type='video/mp4'
        />
      </video>

      <div className="first-screen__body">

        <h1 className="f-h1 first-screen__title">
          Start your <span className='title-colored'>business in Dubai</span>
        </h1>
        <span className="f-h3 first-screen__subtitle">
          We provide services to entrepreneurs from all over the world in the UAE
        </span>

        <div className="first-screen__buttons">
          <div className="first-screen__buttons-item">
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

export default FirstScreen
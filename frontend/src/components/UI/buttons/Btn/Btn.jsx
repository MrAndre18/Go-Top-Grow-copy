import React, { useRef } from 'react';
import './Btn.scss';
import { SwitchTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const Btn = ({ text, isLoading = false, onClick, size = 'lg' }) => {
  const btnRef = useRef(null);

  return (
    <button
      ref={btnRef}
      className={`btn btn--${size}`}
      onClick={onClick}
    >

      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={isLoading}
          timeout={300}
          classNames="fade"
        >
          <div className="btn__content">
            {isLoading ?
              <>
                <span className={`${size === 'lg' ? 'f-button-1' : 'f-button-2'} btn__text`}>
                  Sending
                </span>

                <div className="btn__spinner" />
              </>
              :
              <span className={`${size === 'lg' ? 'f-button-1' : 'f-button-2'} btn__text`}>
                {text}
              </span>
            }

          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  )
}

export default Btn
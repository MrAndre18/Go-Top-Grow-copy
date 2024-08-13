import React, { useEffect, useRef } from 'react';
import './Modal.scss';
import { useOverlayScrollbars } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';

const Modal = ({ children, className, open, setOpen, closeDelay = false }) => {
  const
    modalClasses = ['modal'],
    scrollRef = useRef(null),

    // Scroll
    scrollOptions = {
      overflow: {
        x: 'hidden',
      },
      scrollbars: {
        autoHide: 'move',
        autoHideDelay: 1000,
        autoHideSuspend: true
      },
    },
    [scrollInitialize, scrollInstance] = useOverlayScrollbars({
      options: scrollOptions,
      events: {},
      defer: true
    })

  if (open)
    modalClasses.push('modal--active')

  if (className)
    modalClasses.push(className)

  useEffect(() => {
    scrollInitialize(scrollRef.current);
  }, [scrollInitialize]);

  useEffect(() => {
    closeDelay && open && setTimeout(() => {
      setOpen(false)
    }, closeDelay);
  }, [open])

  return (
    <div
      className={modalClasses.join(' ')}
      onClick={() => setOpen(false)}
    >
      <div
        ref={scrollRef}
        className="modal__body"
      >
        <div className="modal__wrapper">
          <div
            className="modal__content"
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
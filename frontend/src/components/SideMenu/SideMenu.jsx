import React, { useEffect, useRef } from 'react';
import './SideMenu.scss';
import { useOverlayScrollbars } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';

const SideMenu = ({ children, className, open = false, setOpen, orientation = 'right' }) => {
  const
    modalClasses = ['side-menu'],
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
    modalClasses.push('side-menu--open')

  if (className)
    modalClasses.push(className)

  useEffect(() => {
    scrollInitialize(scrollRef.current);
  }, [scrollInitialize]);

  return (
    <div
      className={`side-menu${className ? ' ' + className : ''}${open ? ' side-menu--open' : ''} side-menu--${orientation}`}
      onClick={() => setOpen(false)}
    >
      <div
        ref={scrollRef}
        className="side-menu__body"
      >
        <div className="side-menu__wrapper">
          <div
            className="side-menu__content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="side-menu__close"
              onClick={() => setOpen(false)}
            >
              <span></span>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
import React, { useEffect, useRef } from 'react';
import classes from './StickyMenu.module.scss';

import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

const StickyMenu = ({ children }) => {
  const
    StickyMenuRef = useRef(),
    options = {
      scrollbars: {
        autoHide: 'move',
        autoHideDelay: 2000,
        autoHideSuspend: true
      }
    },
    [initialize, instance] = useOverlayScrollbars({
      options,
      events: {},
      defer: true
    });

  useEffect(() => {
    initialize(StickyMenuRef.current);
  }, [initialize]);

  return (
    <nav
      ref={StickyMenuRef}
      data-overlayscrollbars-initialize
      className={classes["menu-sticky"]}
    >
      {children}
    </nav>
  );
};

export default StickyMenu;
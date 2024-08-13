import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './AnchorsMenu.scss';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Drawer, ModalClose } from '@mui/joy';
import { useTranslation } from 'react-i18next';

const AnchorsMenu = ({ anchors, title }) => {
  const
    { i18n } = useTranslation(),
    // Mobile
    matchesMobile = useMediaQuery('(max-width:768px)'),
    [open, setOpen] = useState(false)

  return (
    <div className="anchors-menu">
      {matchesMobile ?
        <button
          className="anchors-menu__trigger"
          onClick={() => setOpen(true)}
        >
          {title}
        </button>
        : <p className="anchors-category">
          {title}
        </p>}

      {anchors.length ?
        matchesMobile ?
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            size='lg'
          >
            <ModalClose />
            <div className="anchors-links anchors-links--mobile">
              <p className="anchors-category">
                {title}
              </p>
              {anchors.map(anchor =>
                <Link
                  className='anchors-link'
                  activeClass="active"
                  key={anchor.id}
                  // to={`${('article-' + anchor.number) || anchor.slug}`}
                  to={anchor.number ? `article-${anchor.number}` : anchor.slug}
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-50}
                  hashSpy={true}
                  saveHashHistory={false}
                  onClick={() => setOpen(false)}
                >
                  {anchor.title[i18n.resolvedLanguage] || anchor.title}
                </Link>
              )}
            </div>
          </Drawer>
          : <div className="anchors-links">
            {anchors.map(anchor =>
              <Link
                className='anchors-link'
                activeClass="active"
                key={anchor.id}
                to={anchor.number ? `article-${anchor.number}` : anchor.slug}
                spy={true}
                smooth={true}
                duration={400}
                offset={-50}
                hashSpy={true}
                saveHashHistory={false}
              >
                {anchor.title[i18n.resolvedLanguage] || anchor.title}
              </Link>
            )}
          </div>
        : <></>}
    </div>
  );
};

export default AnchorsMenu;
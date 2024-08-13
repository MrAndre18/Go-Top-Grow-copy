import React, { useEffect, useRef, useState } from 'react';
import './CategoriesMenu.scss';
import CategoriesMenuItem from './CategoriesMenuItem';
import ErrorAlert from '../UI/Alerts/ErrorAlert/ErrorAlert';
import { useLocation } from 'react-router-dom';
import ClearBtn from '../UI/buttons/ClearBtn/ClearBtn';
import { Fade, useMediaQuery } from '@mui/material';
import DataLoader from '../UI/Loaders/DataLoader';
import { Drawer, ModalClose } from '@mui/joy';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import { useTranslation } from 'react-i18next';

const CategoriesMenu = ({ items, isLoading, error, currentCategory }) => {
  const
    { t } = useTranslation(),
    [activeIDs, setActiveIDs] = useState([]),
    backPath = useLocation().pathname.split('/'),

    // Mobile
    matchesMobile = useMediaQuery('(max-width:768px)'),
    [open, setOpen] = useState(false),

    // Scrollbar
    menuRef = useRef(null),
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
    if (menuRef.current === null) return
    initialize(menuRef.current);
  }, [initialize, menuRef.current]);

  backPath.pop()

  return (
    <>
      <div className="categories-menu__header">
        {matchesMobile ?
          <button onClick={() => setOpen(true)}
            className="categories-menu__btn">
            {t('categories_menu.title')}
          </button>
          : <p className="categories-menu__title">
            {t('categories_menu.title')}
          </p>
        }

        <Fade
          in={currentCategory ? true : false}
        >
          <div className="categories-menu__clear">
            <ClearBtn
              text={t('categories_menu.clear')}
              path={`${backPath.join('/')}/all`}
              onClick={() => { setActiveIDs([]) }}
            />
          </div>
        </Fade>
      </div>

      {isLoading ?
        <DataLoader />
        :
        error ?
          <ErrorAlert description="There was an error loading categories" />
          :
          items.length ?
            matchesMobile ?
              <Drawer
                open={open}
                onClose={() => setOpen(false)}
                size='lg'
              >
                <ModalClose />
                <nav
                  className='categories-menu categories-menu--mobile'
                  ref={menuRef}
                >
                  <p className="categories-menu__title">
                    {t('categories_menu.title')}
                  </p>

                  <ul className="categories-menu__list">
                    {items &&
                      items.map(item =>
                        <CategoriesMenuItem
                          key={item.id}
                          item={item}
                          activeIDs={activeIDs}
                          setActiveIDs={setActiveIDs}
                        />
                      )
                    }
                  </ul>
                </nav>
              </Drawer>

              : <nav className='categories-menu'>
                <ul className="categories-menu__list">
                  {items &&
                    items.map(item =>
                      <CategoriesMenuItem
                        key={item.id}
                        item={item}
                        activeIDs={activeIDs}
                        setActiveIDs={setActiveIDs}
                      />
                    )
                  }
                </ul>
              </nav>
            : <></>
      }
    </>
  );
};

export default CategoriesMenu;
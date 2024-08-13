import React from 'react';
import classes from './TabsHeader.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TabsHeader = ({ tabs }) => {
  const { i18n } = useTranslation()

  return (
    <div className={classes["tabs-header"]}>
      <nav
        className={classes["tabs-navigation"]}
      >
        {tabs.map((item, index) =>
          <NavLink
            to={item.path}
            key={index}
            className={item.class ?
              [classes["tabs-navigation__item"], classes[item.class]].join(' ')
              : classes["tabs-navigation__item"]
            }
          >
            {item.img ? <div className={classes['tabs-navigation__item-img']}>
              {item.img}
            </div>
              : <></>}

            <span className={classes['tabs-navigation__item-text']}>
              {item.name[i18n.resolvedLanguage]}
            </span>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default TabsHeader;
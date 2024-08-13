import React, { useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/images/svg/arrow-right-thin.svg';

const CategoriesMenuItem = ({ item, activeIDs, setActiveIDs }) => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    const isActive = activeIDs.includes(item.id)

    isActive ?
      setActiveIDs(activeIDs.filter(id => id !== item.id)) :
      setActiveIDs([...activeIDs, item.id])
  }

  const activateMenu = () => {
    const isActive = activeIDs.includes(item.id)

    if (isActive)
      return
    else {
      setActiveIDs([...activeIDs, item.id])
    }
  }

  useEffect(() => {
    const isActive = activeIDs.includes(item.id)
    setOpen(isActive)
  }, [activeIDs])

  return (
    <li className={`categories-menu__item${open ? ' active' : ''}`}>
      {item.children.length ?
        <>
          <div
            className={`categories-menu__item-trigger${open ? ' active' : ''}`}
          >
            <button
              onClick={toggleMenu}
              className="categories-menu__item-btn"
            >
              <Arrow />
            </button>
            <NavLink
              to={item.slug}
              onClick={activateMenu}
              className="categories-menu__item-title"
            >
              {item.name}
            </NavLink>
          </div>

          <Collapse
            in={open}
            timeout={400}
          >
            <ul className="categories-menu__item-children">
              {item.children.map(child =>
                <CategoriesMenuItem
                  key={child.id}
                  item={child}
                  activeIDs={activeIDs}
                  setActiveIDs={setActiveIDs}
                />
              )}
            </ul>
          </Collapse>
        </>
        :
        <NavLink
          to={item.slug}
          className="categories-menu__item-title"
        >
          {item.name}
        </NavLink>
      }
    </li>
  );
};

export default CategoriesMenuItem;
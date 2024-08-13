import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import NavbarLink from '../UI/Links/NavbarLink/NavbarLink';
import './Navbar.scss';

const Navbar = ({ navigation, activeLinks = true }) => {
  const
    { setHeaderMenuIsOpen } = useContext(AppContext)

  return (
    <nav className="navigation">
      <ul className="navigation-list">

        {navigation.map((item, index) =>
          <li key={index} className="navigation-item">
            <NavbarLink
              link={item}
              isCanBeActive={activeLinks}
              callback={() => setHeaderMenuIsOpen(false)}
            />
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;
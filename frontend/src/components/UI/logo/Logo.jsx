import React from 'react';
import classes from './Logo.module.scss';
import { ReactComponent as LogoFull} from '../../../assets/images/Logo-full.svg';
import { ReactComponent as LogoImg} from '../../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ href = '/', full = true }) => {

  return (
    <Link
      to={href}
      className={classes['logo']}
    >
      {full ? <LogoFull/> : <LogoImg/>}
    </Link>
  )
}

export default Logo
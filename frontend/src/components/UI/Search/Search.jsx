import React, { useEffect, useRef, useState } from 'react';
import classes from './Search.module.scss';
import { useOutletContext } from 'react-router-dom';
import { Slide } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useTranslation } from 'react-i18next';

const Search = ({ placeholder, searchQuery }) => {
  const
    { t } = useTranslation(),
    [labelClasses, setLabelClasses] = useState([classes['search-label__text']]),
    textInputRef = useRef(),
    { currentCategory } = useOutletContext() || {},
    [value, setValue] = useState(searchQuery || '')

  useEffect(() => {
    if (value) {
      setLabelClasses([classes['search-label__text'], classes['search-label__text--focused']])

      return
    }

    setLabelClasses([classes['search-label__text']])
  }, [value])

  return (
    <div className={classes['search']}>
      <label className={classes['search-label']}>
        <input
          ref={textInputRef}
          className={classes['search-input']}
          type="search"
          name="search"
          autoComplete='off'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <span className={labelClasses.join(' ')}>
          {currentCategory ?
            t('search_category', { category: currentCategory.name }) :
            placeholder
          }
        </span>
      </label>
      <div className={classes['search-icon']}>
        <Slide
          direction="down"
          in={value ? true : false}
        >
          <CloseRounded
            onClick={() => setValue('')}
            className={classes['search-icon__clear']}
          />
        </Slide>

        <Slide
          direction="up"
          in={value ? false : true}
        >
          <SearchRoundedIcon className={classes['search-icon__search']} />
        </Slide>
      </div>
    </div>
  );
};

export default Search;
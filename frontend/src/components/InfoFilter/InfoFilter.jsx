import React, { useEffect, useState } from 'react';
import SubmitButton from '../UI/buttons/SubmitButton/SubmitButton';
import './InfoFilter.scss';
import Search from '../UI/Search/Search';

const InfoFilter = ({
  searchQuery,
  setSearchQuery,
  placeholder,
  onSubmit,
  onlyFilled = false,
  isLoading = false
}) => {
  const
    [filled, setFilled] = useState(false)

  useEffect(() => {
    if (searchQuery === '')
      setFilled(false)
    else
      setFilled(true)
  }, [searchQuery])

  return (
    <div className='filter'>
      <form
        className='filter-form'
        onSubmit={onSubmit}
      >
        <div className="filter-search">
          <Search
            placeholder={placeholder}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {onlyFilled ?
          <div className='filter-submit'>
            <SubmitButton text='Поиск' disabled={!filled} isLoading={isLoading} />
          </div>

          : <div className="filter-submit">
            <SubmitButton text='Поиск' isLoading={isLoading} />
          </div>
        }
      </form>
    </div>
  );
};

export default InfoFilter;
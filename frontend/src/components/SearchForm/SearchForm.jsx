import React from 'react';
import SubmitButton from '../UI/buttons/SubmitButton/SubmitButton';
import './SearchForm.scss';
import Search from '../UI/Search/Search';
import { useTranslation } from 'react-i18next';

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  placeholder,
  isLoading = false
}) => {
  const { t } = useTranslation(['search'])

  const submitHandler = e => {
    e.preventDefault()

    setSearchQuery(e.target.search.value)
  }

  return (
    <form
      className='form-search'
      onSubmit={submitHandler}
    >
      <div className="form-search__input">
        <Search
          placeholder={placeholder}
          searchQuery={searchQuery}
        />
      </div>

      <div className="form-search__submit">
        <SubmitButton
          text={t('form.btn_submit', { ns: 'search' })}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

export default SearchForm;
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/images/svg/pagination-arrow.svg';
import { ReactComponent as Search } from '../../assets/images/svg/search.svg';
import './TextSearch.scss';
import Mark from "mark.js";

const TextSearch = ({ doc, placeholder, searchQuery }) => {
  const
    searchInputRef = useRef(),
    [searchIsActive, setSearchIsActive] = useState(false),
    [searchResultArr, setSearchResultArr] = useState([]),
    [resultCount, setResultCount] = useState(0),
    [currentResultNumber, setCurrentResultNumber] = useState(0),
    [query, setQuery] = useState(''),
    instance = new Mark(doc)

  const clearInput = () => {
    instance.unmark()
    searchInputRef.current.value = '';
    setResultCount(0)
    setCurrentResultNumber(0)
  }

  const disactivateSearchInput = () => {
    setSearchIsActive(false)
    clearInput()
    setSearchResultArr([])
    setQuery('')
  }

  const selectHighlight = () => {
    const selected =
      searchResultArr
        .find(element => element.id === `search-number-${currentResultNumber}`)

    if (selected) {
      selected.classList.add('selected')
      selected.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const highlightSearch = text => {
    instance.unmark()
    instance.mark(text, {
      "element": "mark",
      "className": "highlight",
      "wildcards": "enabled",
      "each": (node) => {
        setSearchResultArr(result => [...result, node])
      },
      "done": (counter) => {
        setResultCount(counter)
      },
    })
  }

  const increment = () => {
    if (currentResultNumber === resultCount)
      setCurrentResultNumber(1)
    else
      setCurrentResultNumber(currentResultNumber + 1)
  }

  const decrement = () => {
    if (currentResultNumber === 1)
      setCurrentResultNumber(resultCount)
    else
      setCurrentResultNumber(currentResultNumber - 1)
  }

  const search = () => {
    if (!searchIsActive) {
      setSearchIsActive(true)
      return
    }

    setSearchResultArr([])
    setCurrentResultNumber(0)
    setQuery(searchInputRef.current.value)
  }

  useEffect(() => {
    searchResultArr.forEach(element => {
      element.classList.remove('selected')
    });

    selectHighlight()
  }, [currentResultNumber])

  useEffect(() => {
    if (searchIsActive) {
      searchInputRef.current.focus();
    }
  }, [searchIsActive]);

  useEffect(() => {
    highlightSearch(query)
  }, [query])

  useEffect(() => {
    searchResultArr.forEach((element, index) => {
      element.classList.remove('selected')
      element.id = `search-number-${index + 1}`
    });

    if (searchResultArr.length) setCurrentResultNumber(1)
  }, [searchResultArr])

  useEffect(() => {
    if (searchQuery) {
      setSearchIsActive(true)
      searchInputRef.current.value = searchQuery;
      setQuery(searchQuery)
    }
  }, [])

  return (
    <div className={`text-search ${searchIsActive && 'active'}`}>
      <input
        ref={searchInputRef}
        type="text"
        name="text-search"
        placeholder={placeholder}
        className="text-search__input"
        disabled={!searchIsActive}
        onKeyDown={e => {
          if (e.code === 'Enter')
            search()
        }}
      />

      <div className={`text-search__result ${query && 'active'}`}>
        <span className="text-search__result-current">
          {currentResultNumber}
        </span>
        <span className="text-search__result-slash">/</span>
        <span className="text-search__result-total">{resultCount}</span>
      </div>

      <button
        onClick={search}
        className="text-search__btn"
      >
        <Search className="text-search__btn-img" />
      </button>

      <div
        className={`text-search__navigation 
        ${resultCount &&
          'active'
          }`}
      >
        <button
          onClick={decrement}
          className="text-search__navigation-btn text-search__navigation-prev"
          name='prev'
        >
          <Arrow className='text-search__navigation-btn-img' />
        </button>
        <button
          onClick={increment}
          className="text-search__navigation-btn text-search__navigation-next"
          name='next'
        >
          <Arrow className='text-search__navigation-btn-img' />
        </button>
      </div>

      <button
        onClick={disactivateSearchInput}
        className="text-search__close"
      >
        <span></span>
      </button>
    </div>
  );
};

export default TextSearch;
import React, { useEffect, useState } from 'react';
import classes from './TagsItem.module.scss';
import { removeByID } from '../../../API/filters';

const TagsItem = ({ tag, selectedTags, setSelectedTags }) => {
  const
    [isActive, setIsActive] = useState(false),
    [rootClasses, setRootClasses] = useState([classes['tag']])

  const chooseTag = () => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(removeByID(selectedTags, tag.id))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  useEffect(() => {
    if (isActive) {
      setRootClasses([classes['tag'], classes['active']])
    } else {
      setRootClasses([classes['tag']])
    }
  }, [isActive])

  useEffect(() => {
    if (selectedTags.includes(tag)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [selectedTags])

  return (
    <button
      className={rootClasses.join(' ')}
      value={tag.id}
      onClick={chooseTag}
    >
      <span className={classes["tag-text"]}>{tag.name}</span>
    </button>
  );
};

export default TagsItem;
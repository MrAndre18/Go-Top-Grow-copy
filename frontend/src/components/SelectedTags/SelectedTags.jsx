import React from 'react';
import './SelectedTags.scss';
import { Grow } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import TagsItem from '../UI/TagsItem/TagsItem';
import ClearBtn from '../UI/buttons/ClearBtn/ClearBtn';
import { useTranslation } from 'react-i18next';

const SelectedTags = ({ tags, setTags, title, className }) => {
  const { t } = useTranslation()

  return (
    <div className={`selected-tags ${className ? className : ''}`}>
      <div className="selected-tags__header">
        <p className="selected-tags__title">{title}</p>

        <div className="selected-tags__clear">
          <ClearBtn
            text={t('tags.clear')}
            onClick={() => { setTags([]) }}
          />
        </div>
      </div>

      <TransitionGroup className="selected-tags__list"
        component='ul'
      >
        {tags.map(tag =>
          <Grow
            key={tag.id}
          >
            <li className="selected-tags__item">
              <TagsItem
                tag={tag}
                selectedTags={tags}
                setSelectedTags={setTags}
              />
            </li>
          </Grow>
        )}
      </TransitionGroup>
    </div>
  )
}

export default SelectedTags
import React, { useState } from 'react';
import './Tags.scss';
import TagsItem from '../UI/TagsItem/TagsItem';
import TextInput from '../TextInput/TextInput';
import { useTags } from '../../hooks/useTags';
import SelectedTags from '../SelectedTags/SelectedTags';
import { Collapse } from '@mui/material';
import ErrorAlert from '../../components/UI/Alerts/ErrorAlert/ErrorAlert';
import DataLoader from '../../components/UI/Loaders/DataLoader';
import { useTranslation } from 'react-i18next';

const Tags = ({
  tags,
  isLoading,
  error,
  selectedTags,
  setSelectedTags
}) => {
  const
    { t } = useTranslation(),
    // Search
    [tagsSearchQuery, setTagsSearchQuery] = useState(''),

    groupedTags = useTags(tags, tagsSearchQuery)

  return (
    <>
      {tags.length ?

        <div className='tags'>
          <div className="tags-search">
            <TextInput
              placeholder={t('tags.search')}
              value={tagsSearchQuery}
              setValue={setTagsSearchQuery}
            />
          </div>

          <Collapse in={selectedTags.length ? true : false}>
            <div className="tags-selected">
              <SelectedTags
                tags={selectedTags}
                setTags={setSelectedTags}
                title={t('tags.selected')}
              />
            </div>
          </Collapse>

          <div className="tags-body">
            {isLoading ?
              <DataLoader />
              : error ?
                <ErrorAlert /> :
                groupedTags.map((tagsGroup, index) =>
                  <div key={index} className="tags-group">
                    <div className="tags-letter">
                      <p className="tags-letter__item">
                        {tagsGroup.letter}
                      </p>
                    </div>

                    <ul className="tags-list">
                      {tagsGroup.elements.map(tag =>
                        <li key={tag.id} className="tags-list__item">
                          <TagsItem
                            tag={tag}
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                          />
                        </li>
                      )}
                    </ul>
                  </div>
                )
            }
          </div>
        </div>

        : <></>
      }
    </>
  );
};

export default Tags;
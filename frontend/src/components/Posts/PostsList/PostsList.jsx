import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostsList.scss';
import { CircularProgress } from '@mui/joy';
import ErrorAlert from '../../UI/Alerts/ErrorAlert/ErrorAlert';
import DataLoader from '../../UI/Loaders/DataLoader';
import { useTranslation } from 'react-i18next';

const PostsList = ({
  posts,
  totalCount,
  isLoading,
  error,
  searchQuery
}) => {
  const { t } = useTranslation()

  return (
    <div className="posts">
      {Number.isFinite(totalCount) &&
        <p className="posts-count">
          {t('posts_list.result_count')}
          <span className="posts-count__value">
            {isLoading ?
              <CircularProgress
                variant="plain"
                color="neutral"
                sx={{
                  "--CircularProgress-size": "14px",
                  "--CircularProgress-trackThickness": "2px",
                  "--CircularProgress-progressThickness": "2px",
                  "--CircularProgress-progressColor": "#EDF8FF",
                }}
              />
              : totalCount || 0}
          </span>
        </p>}

      <ul className="posts-list">
        {isLoading ?
          <DataLoader />
          : error ?
            <ErrorAlert description="There was an error loading data. Try it later" />
            : posts.length ?
              posts.map((post, index) =>
                <li key={index} className="posts-item">
                  <PostItem
                    post={post}
                    searchQuery={searchQuery}
                  />
                </li>
              )
              : <p className="noresult-message">{t('posts_list.no_result')}</p>
        }
      </ul>
    </div >
  );
};

export default PostsList;
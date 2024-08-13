import React from 'react';
import './PaginationMore.scss';
import ShowMoreBtn from '../UI/buttons/ShowMoreBtn/ShowMoreBtn';
import HideBtn from '../UI/buttons/HideBtn/HideBtn';
import { useTranslation } from 'react-i18next';

const PaginationMore = ({ page, setPage, totalPages }) => {
  const
    { t } = useTranslation()

  return (
    <div className="pagination-more">
      {page < totalPages &&
        <div
          className={`pagination-more-item ${page === 1 && 'pagination-more-item--centered'}`}>
          <ShowMoreBtn
            onClick={() => { setPage(page + 1) }}
          >
            {t('pagination_more.show')}
          </ShowMoreBtn>
        </div>
      }

      {page > 1 &&
        <div
          className={`pagination-more-item ${page === totalPages && 'pagination-more-item--centered'}`}>
          <HideBtn
            onClick={() => { setPage(1) }}
          >
            {t('pagination_more.hide')}
          </HideBtn>
        </div>
      }
    </div>
  );
};

export default PaginationMore;
import React, { useEffect, useState } from 'react';
import './PhotoCards.scss';
import PhotoCard from '../PhotoCard/PhotoCard';
import { usePaginationFront } from '../../hooks/usePaginationFront';
import { getPageCount } from '../../API/pages';
import PaginationMore from '../PaginationMore/PaginationMore';

const PhotoCards = ({ cards, totalCount, category }) => {
  const
    // Pagination
    limit = 6,
    [page, setPage] = useState(1),
    [totalPages, setTotalPages] = useState(0),
    CurrentCards = usePaginationFront(cards, page, limit, false)

  useEffect(() => {
    setTotalPages(getPageCount(totalCount, limit))
  }, [totalCount, limit])

  return (
    <>
      <div className='photo-cards'>
        {CurrentCards.map(card =>
          <PhotoCard
            key={card.id}
            card={card}
            category={category}
          />
        )}
      </div>

      {totalPages > 1 &&
        <div className="photo-cards__pagination">
          <PaginationMore
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      }
    </>
  );
};

export default PhotoCards;
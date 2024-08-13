import React from 'react';
import './Pagination.scss';
import { Pagination } from '@mui/material';

const CustomPagination = ({ page, setPage, totalPages }) => {
  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <Pagination
      className='pagination'
      count={totalPages}
      page={page}
      onChange={handleChange}
      hidePrevButton={totalPages <= 5 ? true : false}
      hideNextButton={totalPages <= 5 ? true : false}
    />
  );
};

export default CustomPagination;
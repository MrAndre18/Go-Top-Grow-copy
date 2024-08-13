import React, { useEffect, useState } from 'react';
import './LawsList.scss';
import { useOutletContext, useParams } from 'react-router-dom';
import { useFetching } from '../../../hooks/useFetching';
import PostService from '../../../API/PostService';
import { fetchUrls } from '../../../API/URLs';
import PostsList from '../../../components/Posts/PostsList/PostsList';
import { getPageCount } from '../../../API/pages';
import CustomPagination from '../../../components/Pagination/Pagination';
import { Fade } from '@mui/material';
import SearchForm from '../../SearchForm/SearchForm';
import { useTranslation } from 'react-i18next';

const LawsList = () => {
  const
    { t, i18n } = useTranslation(['laws']),
    [firstLoading, setFirstLoading] = useState(true),

    // Categories
    { category } = useParams(),

    // Params
    { setSearchParams } = useOutletContext(),

    // Laws
    [laws, setLaws] = useState([]),
    [totalCount, setTotalCount] = useState(0),

    // Search
    { queryParam } = useOutletContext(),
    [query, setQuery] = useState(queryParam),

    // Pagination
    { page, setPage } = useOutletContext(),
    [totalPages, setTotalPages] = useState(0),

    // Fetches
    [fetchLaws, isLawsLoading, lawsError] = useFetching(async () => {
      const
        response =
          category ?
            await PostService
              .getByCategory(fetchUrls.laws, page, category, query, i18n.resolvedLanguage) :
            await PostService
              .getAll(fetchUrls.laws, page, query, undefined, i18n.resolvedLanguage)

      setLaws(response.data.result || [])
      setTotalCount(response.data.count || 0)
      setTotalPages(getPageCount(response.data.count || 0, response.data.per_page || 1))
    })

  const getParams = () => {
    const params = {}

    if (page) params.page = page
    if (query) params.search = query

    return params
  }

  useEffect(() => {
    fetchLaws(page, category, query)
    setSearchParams(getParams())
  }, [page])

  useEffect(() => {
    if (firstLoading) return

    if (page === 1) {
      fetchLaws(page, category, query)
      setSearchParams(getParams())
    }
    else setPage(1)
  }, [category, query, i18n.resolvedLanguage])

  useEffect(() => {
    setFirstLoading(false)
  }, [])

  return (
    <>
      <SearchForm
        searchQuery={query}
        setSearchQuery={setQuery}
        placeholder={t('form.placeholder', { ns: 'laws' })}
        isLoading={isLawsLoading}
      />

      <div className="laws-list">
        <PostsList
          posts={laws}
          totalCount={totalCount}
          isLoading={isLawsLoading}
          error={lawsError}
          searchQuery={query}
        />
      </div>

      {totalPages > 1 ?
        <Fade in={!isLawsLoading}>
          <div className="laws-pagination">
            <CustomPagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
        </Fade>
        : <></>}
    </>
  );
};

export default LawsList;
import React, { useEffect, useState } from 'react';
import './Laws.scss';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import CategoriesMenu from '../../components/CategoriesMenu/CategoriesMenu';
import { getCategoriesTree, getCurrentCategory } from '../../API/categories';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { SITE_ROOT, fetchUrls } from '../../API/URLs';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const Laws = () => {
  const
    { i18n } = useTranslation(),

    // GET params
    [searchParams, setSearchParams] = useSearchParams(),
    pageParam = +searchParams.get('page') || 1,
    queryParam = searchParams.get('search') || '',

    // Categories
    { category } = useParams(),
    [categories, setCategories] = useState([]),
    [currentCategory, setCurrentCategory] = useState(),

    // Pagination
    [page, setPage] = useState(pageParam),

    //Menu
    [menuLinks, setMenuLinks] = useState([]),

    // Fetches
    [fetchCategories, isCategoriesLoading, categoriesError] = useFetching(async () => {
      const response =
        await PostService
          .getCategories(fetchUrls.laws, i18n.resolvedLanguage)

      setMenuLinks(getCategoriesTree(response.data || [], category))
      setCategories(response.data || [])
    })

  useEffect(() => {
    setCurrentCategory(getCurrentCategory(categories, category))
  }, [categories, category]);

  useEffect(() => {
    fetchCategories(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage]);

  return (
    <main className="content laws">
      <Helmet>
        <link rel="canonical" href={`${SITE_ROOT}/laws/all`} />
      </Helmet>

      <div className="content-body info-page">
        <div className="info-menu">
          <CategoriesMenu
            items={menuLinks}
            isLoading={isCategoriesLoading}
            error={categoriesError}
            currentCategory={category}
          />
        </div>

        <div className="info-content">
          <Outlet context={{
            // Categories
            categories,
            currentCategory,

            // Page
            page, setPage,

            // Search
            queryParam,

            // Params
            setSearchParams
          }} />
        </div>
      </div>
    </main>
  );
};

export default Laws;
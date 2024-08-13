import React, { useEffect, useState } from 'react';
import './DetailPage.scss';
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { API_ROOT, fetchUrls } from '../../API/URLs';
import MaskImage from '../MaskImage/MaskImage';
import BtnBack from '../UI/buttons/BtnBack/BtnBack';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const DetailPage = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0
    });
  }, [])

  const
    { t } = useTranslation(['info']),
    { infoPage, infoCategory, infoCategorySlug } = useParams(),
    [pageContent, setPageContent] = useState({}),

    [fetchContent, isContentLoading, ContentError] = useFetching(async () => {
      const response =
        await PostService
          .getDetailBySlug(
            [fetchUrls.infoURL, infoPage, infoCategory].join('/'),
            infoCategorySlug)

      setPageContent(response.data || {})
    })

  useEffect(() => {
    fetchContent()
  }, [])

  return (
    <main className="content detail">
      {<Title
        title={pageContent.name}
      />}

      <div className="content-body">
        <div className="detail-page">
          <div className="detail-back">
            <BtnBack text={t('detail.back', { ns: 'info' })} />
          </div>

          <div className="detail-body">
            {pageContent.image ?
              <MaskImage
                className="detail-image"
                backgroundImage={API_ROOT + pageContent.image}
              >
                <div className="detail-image__item" />
                <div className="detail-image__item" />
                <div className="detail-image__item" />
              </MaskImage>
              : <></>
            }

            <div
              className="detail-content"
              dangerouslySetInnerHTML={{
                __html: pageContent.description
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
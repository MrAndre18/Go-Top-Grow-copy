import React, { useEffect, useState } from 'react';
import InfoTitle from '../../../../components/UI/InfoTitle/InfoTitle';
import PhotoCards from '../../../../components/PhotoCards/PhotoCards';
import { useFetching } from '../../../../hooks/useFetching';
import PostService from '../../../../API/PostService';
import { fetchUrls } from '../../../../API/URLs';
import { useTranslation } from 'react-i18next';

const StateEmirates = ({ id }) => {
  const
    { t, i18n } = useTranslation(['info']),

    [emirates, setEmirates] = useState([]),

    // Fetches
    [fetchEmirates] = useFetching(async () => {
      const
        response = await PostService
          .getAllFull(`${fetchUrls.state}/emirates`, i18n.resolvedLanguage)

      setEmirates(response.data || [])
    })

  useEffect(() => {
    fetchEmirates(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  return (
    emirates.length ?
      <div
        className="info-content__block state-emirates"
        id={id}
      >
        <div className="info-content__block-title">
          <InfoTitle>
            {t('state.emirates.title', { ns: 'info' })}
          </InfoTitle>
        </div>

        <PhotoCards
          cards={emirates}
          totalCount={emirates.length}
          category="emirates"
        />
      </div>
      : <></>
  );
};

export default StateEmirates;
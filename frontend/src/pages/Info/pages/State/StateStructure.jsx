import React, { useEffect, useState } from 'react';
import InfoTitle from '../../../../components/UI/InfoTitle/InfoTitle';
// import Cards from '../../../../components/Cards/Cards';
import Card from '../../../../components/Card/Card';
import { useFetching } from '../../../../hooks/useFetching';
import PostService from '../../../../API/PostService';
import { fetchUrls } from '../../../../API/URLs';
import { useTranslation } from 'react-i18next';

const StateStructure = () => {
  const
    { t, i18n } = useTranslation(['info']),

    [structure, setStructure] = useState([]),

    // Fetches
    [fetchStructure] = useFetching(async () => {
      const
        response = await PostService
          .getAllFull(`${fetchUrls.state}/structure`, i18n.resolvedLanguage)

      setStructure(response.data || [])
    })

  useEffect(() => {
    fetchStructure(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  return (
    <>
      <div className="info-content__block-title">
        <InfoTitle>
          {t('state.structure.title', { ns: 'info' })}
        </InfoTitle>
      </div>

      <div className="info-text">
        <p className="info-text__paragraph">
          {t('state.structure.text.1', { ns: 'info' })}
        </p>
        <p className="info-text__paragraph">
          {t('state.structure.text.2', { ns: 'info' })}
        </p>
        <p className="info-text__paragraph">
          {t('state.structure.text.3', { ns: 'info' })}
        </p>
        <p className="info-text__paragraph">
          {t('state.structure.text.4', { ns: 'info' })}
        </p>
        <p className="info-text__paragraph">
          {t('state.structure.text.5', { ns: 'info' })}
        </p>
      </div>

      {structure.length ?
        <div className="state-structure__cards">
          {/* <Cards>
            {structure.map(card =>
              <Card
                key={card.id}
                card={card}
                href={`structure/${card.slug}`}
              />
            )}
          </Cards> */}
        </div>
        : <></>}
    </>
  );
};

export default StateStructure;
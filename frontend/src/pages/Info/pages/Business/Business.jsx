import React, { useState } from 'react';
import './Business.scss';
import StickyMenu from '../../../../components/UI/StickyMenu/StickyMenu';
import InfoTitle from '../../../../components/UI/InfoTitle/InfoTitle';
import { companiesForms, companiesTypes, businessOpen, businessAnchors } from '../../../../utils/business';
import Card from '../../../../components/Card/Card';
import Accordion from '../../../../components/Accordion/Accordion';
import AnchorsMenu from '../../../../components/AnchorsMenu/AnchorsMenu';
// import Cards from '../../../../components/Cards/Cards';
import { useFetching } from '../../../../hooks/useFetching';
import PostService from '../../../../API/PostService';
import { fetchUrls } from '../../../../API/URLs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const
    { t, i18n } = useTranslation(['info']),

    [licenses, setLicenses] = useState([]),

    // Fetches
    [fetchLicenses] = useFetching(async () => {
      const
        response = await PostService
          .getAllFull(`${fetchUrls.business}`, i18n.resolvedLanguage)

      setLicenses(response.data || [])
    })

  useEffect(() => {
    fetchLicenses(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  return (
    <section className="info-page business">

      <div className="info-menu info-menu--sticky">
        <StickyMenu>
          <AnchorsMenu
            anchors={businessAnchors}
            title={t('navigation_menu.title', { ns: 'translation' })}
          />
        </StickyMenu>
      </div>

      <div className="info-content">
        <div
          className="info-content__block business-companies"
          id='companies-types'
        >
          <div className="info-content__block-title">
            <InfoTitle>{t('business.companies.title', { ns: 'info' })}</InfoTitle>
          </div>

          <div className="business-companies__cards">
            {/* <Cards>
              {companiesTypes[i18n.resolvedLanguage].map(card =>
                <Card
                  key={card.id}
                  card={card}
                  href={card.href}
                />
              )}
            </Cards> */}
          </div>

          <div className="business-companies__forms">
            <Accordion
              items={companiesForms[i18n.resolvedLanguage]}
              title={t('business.companies.forms', { ns: 'info' })}
            />
          </div>
        </div>

        {businessOpen ?
          <div
            className="info-content__block business-open"
            id='open-business'
          >
            <div className="info-content__block-title">
              <InfoTitle>{t('business.open.title', { ns: 'info' })}</InfoTitle>
            </div>

            {businessOpen[i18n.resolvedLanguage].map((list, listIndex) =>
              <div
                key={listIndex}
                className="business-list-wrapper"
              >
                <h4 className="business-list__title">
                  {list.title}
                </h4>
                <ol className="business-list">
                  {list.list.map((item, index) =>
                    <li
                      key={index}
                      className="business-list__item"
                    >
                      {item.item}
                    </li>
                  )}
                </ol>
              </div>
            )}
          </div>

          : <></>
        }

        {licenses.length ?
          <div
            className="info-content__block business-licenses"
            id='licenses-types'
          >
            <div className="info-content__block-title">
              <InfoTitle>{t('business.licenses.title', { ns: 'info' })}</InfoTitle>
            </div>

            <Accordion
              items={licenses}
            />
          </div>

          : <></>
        }
      </div>

    </section>
  );
};

export default Business;
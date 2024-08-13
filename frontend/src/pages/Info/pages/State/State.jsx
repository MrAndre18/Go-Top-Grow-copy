import React, { useEffect, useState } from 'react';
import './State.scss';
import { stateAnchors } from '../../../../utils/state';
import StickyMenu from '../../../../components/UI/StickyMenu/StickyMenu';
import AnchorsMenu from '../../../../components/AnchorsMenu/AnchorsMenu';
import InfoTitle from '../../../../components/UI/InfoTitle/InfoTitle';
import Accordion from '../../../../components/Accordion/Accordion';
import PostService from '../../../../API/PostService';
import { fetchUrls } from '../../../../API/URLs';
import { useFetching } from '../../../../hooks/useFetching';
import StateStructure from './StateStructure';
import StateFreeZones from './StateFreeZones';
import StateEmirates from './StateEmirates';
import { useTranslation } from 'react-i18next';

const State = () => {
  const
    { t, i18n } = useTranslation(['info']),
    // Content
    [contacts, setContacts] = useState([]),

    // Fetches
    [fetchContacts] = useFetching(async () => {
      const
        response = await PostService
          .getAllFull(`${fetchUrls.state}/contacts`, i18n.resolvedLanguage)

      setContacts(response.data || [])
    })

  useEffect(() => {
    fetchContacts(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  return (
    <section className="info-page state">
      <div className="info-menu info-menu--sticky">
        <StickyMenu>
          <AnchorsMenu
            anchors={stateAnchors}
            title={t('navigation_menu.title', { ns: 'translation' })}
          />
        </StickyMenu>
      </div>

      <div className="info-content">
        <div
          className="info-content__block state-structure"
          id='structure'
        >
          <StateStructure />
        </div>

        {contacts.length ?
          <div
            className="info-content__block state-contacts"
            id='contacts'
          >
            <div className="info-content__block-title">
              <InfoTitle>
                {t('state.contacts.title', { ns: 'info' })}
              </InfoTitle>
            </div>

            <Accordion
              items={contacts}
            />
          </div>
          : <></>}

        <StateEmirates id="emirates" />

        <StateFreeZones id="free-zones" />

        {/* <div
          className="info-content__block state-free-zones-advantages"
          id='free-zones-advantages'
        >
          <div className="info-content__block-title">
            <InfoTitle>Преимущества свободных зон</InfoTitle>
          </div>

          <Accordion
            items={freeZonesAdvantages}
          />
        </div> */}
      </div>
    </section>
  );
};

export default State;
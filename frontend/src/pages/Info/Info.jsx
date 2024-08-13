import React from 'react';
import './Info.scss';
import Title from '../../components/Title/Title';
import { tabs } from '../../utils/navigation';
import TabsHeader from '../../components/UI/tabsHeader/TabsHeader';
import './Info.scss';
import { Outlet } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { SITE_ROOT } from '../../API/URLs';

const Info = () => {
  const
    { t } = useTranslation(['info'])
  
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0
    });
  }, [])

  return (
    <main className="content info">
      <Helmet>
        <link rel="canonical" href={`${SITE_ROOT}/info/state`} />
        <link rel="canonical" href={`${SITE_ROOT}/info/business`} />
      </Helmet>

      <Title
        title={t('title', { ns: 'info' })}
      />

      <div className="content-body">
        <div className="tabs">
          <TabsHeader tabs={tabs} />
        </div>

        <div className="info-body">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Info;
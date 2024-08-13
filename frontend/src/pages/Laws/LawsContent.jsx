import React from 'react';
import { useOutletContext } from 'react-router-dom';
import LawsList from '../../components/Laws/LawsList/LawsList';
import { useTranslation } from 'react-i18next';

const LawsContent = () => {
  const
    { t } = useTranslation(['laws']),
    // Categories
    { currentCategory } = useOutletContext()

  return (
    <>
      <div className="info-content__header">
        <h2 className="info-content__category">
          {currentCategory ?
            currentCategory.name :
            t('form.current_category', { ns: 'laws' })
          }
        </h2>
      </div>

      <div className="laws-body">
        <LawsList />
      </div>
    </>
  );
};

export default LawsContent;
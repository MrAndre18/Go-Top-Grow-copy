import React, { useEffect, useState } from 'react';
import InfoTitle from '../../../../components/UI/InfoTitle/InfoTitle';
import PhotoCards from '../../../../components/PhotoCards/PhotoCards';
import CustomSelect from '../../../../components/Select/Select';
import { useSelectedFreeZones } from '../../../../hooks/useFilter';
import { useFetching } from '../../../../hooks/useFetching';
import PostService from '../../../../API/PostService';
import { fetchUrls } from '../../../../API/URLs';
import { useTranslation } from 'react-i18next';

const StateFreeZones = ({ id }) => {
  const
    { t, i18n } = useTranslation(['info']),

    [freeZones, setFreeZones] = useState([]),

    // Options for selects
    [emirates, setEmirates] = useState([]),

    // Filters
    [emiratesFilter, setEmiratesFilter] = useState(null),

    // Filtered Content
    freeZonesSelected = useSelectedFreeZones(freeZones, { emirate: emiratesFilter }),

    // Fetches
    [fetchFreeZones] = useFetching(async () => {
      const
        response = await PostService
          .getAllFull(`${fetchUrls.state}/free-zones`, i18n.resolvedLanguage)

      setFreeZones(response.data.zones || [])
      setEmirates(response.data.emirate_list || [])
    })

  useEffect(() => {
    fetchFreeZones(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])

  return (
    freeZones.length ?
      <div
        className="info-content__block state-free-zones"
        id={id}
      >
        <div className="info-content__block-title">
          <InfoTitle>
            {t('state.free_zones.title', { ns: 'info' })}
          </InfoTitle>
        </div>

        <div className="state-free-zones__filters">
          <div className="state-free-zones__filters-item">
            <CustomSelect
              options={emirates}
              placeholder={t('state.free_zones.selects.emirates', { ns: 'info' })}
              setSelectedValue={setEmiratesFilter}
            />
          </div>
        </div>

        <PhotoCards
          cards={freeZonesSelected}
          totalCount={freeZonesSelected.length}
          category="free-zones"
        />
      </div>
      : <></>
  );
};

export default StateFreeZones;
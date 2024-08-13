import { Photo } from '@mui/icons-material';
import React from 'react';
import './PhotoCard.scss';
import { API_ROOT } from '../../API/URLs';
import MoreBtn from '../UI/buttons/MoreBtn/MoreBtn';
import Image from '../UI/Image/Image';
import { cutString } from '../../API/textMethods';
import { useTranslation } from 'react-i18next';

const PhotoCard = ({ card, category }) => {
  const
    { t } = useTranslation()

  return (
    <div
      key={card.id}
      className="photo-cards__item"
    >

      <div className="photo-cards__item-image">
        <Image
          src={API_ROOT + card.image}
          alt={card.name}
          altImage={
            <Photo
              className="photo-cards__item-image-img"
              color="disabled"
            />}
          className="photo-cards__item-image-img"
        />
      </div>

      <div className="photo-cards__item-content">
        <h3 className="photo-cards__item-title">
          {card.name}
        </h3>
        <p className="photo-cards__item-description">
          {cutString(card.description, 200)}
        </p>
        <div className="photo-cards__item-bottom">
          <div className="photo-cards__item-more">
            <MoreBtn
              text={t('photo_card.more_btn')}
              path={`${category}/${card.slug}`}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PhotoCard;
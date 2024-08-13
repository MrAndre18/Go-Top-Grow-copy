import styles from './index.module.scss';
import { ReactComponent as StarIcon } from '../../../assets/images/svg/star_filled.svg';
import { ReactComponent as NoImageIcon } from '../../../assets/images/svg/no_image.svg';
import { Avatar } from '../../../shared/ui/avatar';
import { Chip } from '../../../shared/ui/chip';
import Moment from 'react-moment';
import Dotdotdot from 'react-clamp';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { Tag } from '../../../shared/ui/tag';
import { Link } from 'react-router-dom';

export const Post = ({
  id,
  slug,
  title,
  desc,
  date,
  img,
  category,
  readTime,
  rating,
  author = {},
  tags
}) => {
  const [description, setDescription] = useState()

  useEffect(() => {
    setDescription(parse(desc))
  }, [])

  return (
    <article className={styles.post}>
      <Picture
        slug={slug}
        img={img}
        title={title}
        category={category}
      />

      <div className={styles['post__body']}>
        <Content
          slug={slug}
          date={date}
          readTime={readTime}
          rating={rating}
          title={title}
          description={description}
          tags={tags}
        />

        <Author author={author} />
      </div>
    </article>
  )
}

const Picture = ({ slug, img, title, category }) => {
  return (
    <Link
      className={styles['post__picture-wrapper']}
      to={slug}
    >
      <picture className={styles['post__picture']}>
        {!!img ?
          <img
            className={styles['post__picture-img']}
            src={img.src}
            alt={!!img.alt ? img.alt : title}
          />
          :
          <div className={styles['post__picture-no-image']}>
            <NoImageIcon />
          </div>
        }
      </picture>

      {!!category &&
        <div className={styles['post__category']}>
          <Chip>{category.name}</Chip>
        </div>
      }
    </Link>
  )
}

const Content = ({ slug, date, readTime, rating, title, description, tags }) => {
  return (
    <div className={styles['post__content']}>
      <ul className={styles['post__tags']}>
        {tags.map(tag =>
          <li
            className={styles['post__tags-item']}
            key={tag.id}
          >
            <Tag>{tag.name}</Tag>
          </li>
        )}
      </ul>

      <header className={styles['post__header']}>
        <div className={styles['post__header-info']}>
          <div className={styles['post__info']}>
            <Moment
              className={['f-body-2', styles['post__date']].join(' ')}
              date={date}
              format="D MMM YYYY"
            />

            {!!readTime &&
              <>
                <div className={styles['post__info-divider']} />

                <span className={['f-body-2', styles['post__read-time']].join(' ')}>
                  {readTime}
                </span>
              </>
            }
          </div>

          {/* <div className={styles['post__rating']} data-rated={!!rating ? 'true' : 'false'}>
            <div className={styles['post__rating-star']}>
              <StarIcon />
            </div>

            <span className={['f-body-2', styles['post__rating-value']].join(' ')}>
              {!!rating ? rating : 'no ratings'}
            </span>
          </div> */}
        </div>

        <Link
          className={styles['post__title']}
          to={slug}
        >
          <h3 className='f-h4'>{title}</h3>
        </Link>
      </header>

      <Dotdotdot
        className={['f-body-1', styles['post__desc']].join(' ')}
        clamp={3}
      >
        {description}
      </Dotdotdot>
    </div>
  )
}

const Author = ({ author }) => {
  return (
    <footer className={styles['post__author']}>
      <Avatar
        src={author.img}
        alt={author.name}
      />

      <div className={styles['post__author-info']}>
        <span className={['f-subtitle-1', styles['post__author-subtitle']].join(' ')}>
          Written by
        </span>

        <span className={['f-body-1', styles['post__author-name']].join(' ')}>
          {author.name}
        </span>
      </div>
    </footer>
  )
}

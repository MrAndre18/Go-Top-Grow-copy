import styles from './index.module.scss';
import noPhoto from '../../../assets/images/no_photo.png';

export const Avatar = ({ src, alt, size = 40, style }) => {
  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      <img className={styles['avatar__img']} src={src} alt={alt} />
      <img className={styles['avatar__no-photo']} src={noPhoto} alt={alt} />
      <div className={styles['avatar__bg']} />
    </div>
  )
}

import styles from './index.module.scss';

export const Tag = ({ children, style }) => {
  return (
    <div
      className={styles.tag}
      style={style}
    >
      <span className={['f-button-2', styles['tag__text']].join(' ')}>
        {children}
      </span>
    </div>
  )
}

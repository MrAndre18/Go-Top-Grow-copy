import styles from './index.module.scss';

export const Chip = ({ children, style }) => {
  return (
    <div className={styles.chip} style={style} >
      <span className={['f-button-2', styles['chip__text']].join(' ')}>
        {children}
      </span>
    </div>
  )
}

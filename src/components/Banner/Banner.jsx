import styles from './style.module.scss';
import avatarImage from './avatar.jpeg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.person}>
        <img className={styles.avatar} src={avatarImage} alt="Dell Lee" />
        <div className={styles.title}>This is the title area</div>
        <div className={styles.description}>主にフルスタックをやっています( JavaScript / React / Vue/ Java )</div>
      </div>
    </div>)
}

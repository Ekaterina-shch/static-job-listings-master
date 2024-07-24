import styles from './Tag.module.scss';

const Tag = ({ text }) => {
  return <div className={styles.tag}>{text}</div>;
};

export default Tag;

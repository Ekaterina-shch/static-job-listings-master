import styles from './Tag.module.scss';

const Tag = ({ text, addTag }) => {
  return (
    <div className={styles.tag} onClick={() => addTag(text)}>
      {text}
    </div>
  );
};

export default Tag;

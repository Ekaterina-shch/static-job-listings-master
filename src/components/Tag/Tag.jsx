import styles from './Tag.module.scss';

const Tag = ({ text, addTag }) => {
  const isActive = false;
  return (
    <div
      className={isActive ? styles.tag + ' ' + styles.active : styles.tag}
      onClick={() => {
        addTag(text);
      }}
    >
      {text}
    </div>
  );
};

export default Tag;

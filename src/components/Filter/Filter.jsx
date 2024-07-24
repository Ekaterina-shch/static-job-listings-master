import Tag from '../Tag/Tag';
import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTagsList}>
        <div className={styles.filterTagItem}>
          <Tag text="CSS" />
          <button className={styles.btnFilterRemove}></button>
        </div>
      </div>
      <button className={styles.btnClear}>Clear</button>
    </div>
  );
};

export default Filter;

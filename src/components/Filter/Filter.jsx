import styles from './Filter.module.scss';

const Filter = ({
  stackSelectedCategory,
  setStackSelectedCategory,
  clearFilter,
}) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTagsList}>
        {stackSelectedCategory.map((tag) => {
          return (
            <div className={styles.filterTagItem} key={tag}>
              <div className={styles.text}>{tag}</div>
              <button
                className={styles.btnFilterRemove}
                onClick={() => {
                  setStackSelectedCategory(
                    stackSelectedCategory.filter((a) => a !== tag)
                  );
                }}
              ></button>
            </div>
          );
        })}
      </div>
      <button className={styles.btnClear} onClick={clearFilter}>
        Clear
      </button>
    </div>
  );
};

export default Filter;

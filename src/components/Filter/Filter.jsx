import styles from './Filter.module.scss';

const Filter = ({ stack, setStack }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTagsList}>
        {stack.map((tag) => {
          return (
            <div className={styles.filterTagItem} key={tag}>
              <div className={styles.text}>{tag}</div>
              <button
                className={styles.btnFilterRemove}
                onClick={() => {
                  setStack(stack.filter((a) => a !== tag));
                }}
              ></button>
            </div>
          );
        })}
      </div>
      <button className={styles.btnClear} onClick={() => setStack([])}>
        Clear
      </button>
    </div>
  );
};

export default Filter;

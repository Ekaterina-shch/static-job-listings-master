import FeaturedLabel from './../labels/FeatiredLabel/FeaturedLabel';
import NewLabel from './../labels/NewLabel/NewLabel';
import Tag from './../Tag/Tag';
import styles from './Post.module.scss';

const Post = ({
  newTag,
  company,
  logo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addTag,
}) => {
  const tagArray = [role, level, ...languages, ...tools];

  return (
    <div
      className={
        featured ? styles.post + ' ' + styles.postFeatured : styles.post
      }
    >
      <div className={styles.postWrapper}>
        <div className={styles.logo}>
          <img src={logo} alt={company} />
        </div>
        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.header}>
              <p className={styles.company}>{company}</p>
              {newTag && <NewLabel />}
              {featured && <FeaturedLabel />}
            </div>
            <h3 className={styles.position}>{position}</h3>
            <div className={styles.bodyBottom}>
              <p className={styles.postedAt}>{postedAt}</p>
              <p className={styles.contract}>{contract}</p>
              <p className={styles.location}>{location}</p>
            </div>
          </div>
          <div className={styles.categories}>
            {tagArray.map((text) => {
              return <Tag text={text} key={text} addTag={addTag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

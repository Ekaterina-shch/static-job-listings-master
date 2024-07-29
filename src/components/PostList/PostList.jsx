import Post from './../Post/Post';
import styles from './PostList.module.scss';

const PostList = ({ data, addTag }) => {
  return (
    <div className={styles.postList}>
      {data.map((data) => {
        return (
          <Post newTag={data.new} {...data} key={data.id} addTag={addTag} />
        );
      })}
    </div>
  );
};

export default PostList;

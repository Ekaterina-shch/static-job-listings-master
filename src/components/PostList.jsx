import Post from './Post';
import data from './../data/data';

const PostList = () => {
  return (
    <div>
      <h2>PostList</h2>
      <hr />
      {data.map((data) => {
        return <Post newTag={data.new} {...data} key={data.id} />;
      })}
    </div>
  );
};

export default PostList;

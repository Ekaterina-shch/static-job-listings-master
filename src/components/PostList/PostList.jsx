import Post from './../Post/Post';
import data from './../../data/data';

const PostList = () => {
  return (
    <div>
      {data.map((data) => {
        return <Post newTag={data.new} {...data} key={data.id} />;
      })}
    </div>
  );
};

export default PostList;

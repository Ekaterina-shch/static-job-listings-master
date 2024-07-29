import Post from './../Post/Post';

const PostList = ({ data, addTag }) => {
  return (
    <div>
      {data.map((data) => {
        return (
          <Post newTag={data.new} {...data} key={data.id} addTag={addTag} />
        );
      })}
    </div>
  );
};

export default PostList;

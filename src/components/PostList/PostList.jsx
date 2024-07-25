import Post from './../Post/Post';

const PostList = ({ data, addTag, setStack }) => {
  return (
    <div>
      {data.map((data) => {
        return (
          <Post
            newTag={data.new}
            {...data}
            key={data.id}
            addTag={addTag}
            setStack={setStack}
          />
        );
      })}
    </div>
  );
};

export default PostList;

import FeaturedLabel from './labels/FeaturedLabel';
import NewLabel from './labels/NewLabel';
import Tag from './Tag';

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
}) => {
  return (
    <div className="Post">
      <div className="logo">
        <img src={logo} alt={company} />
      </div>
      <div className="body">
        <div className="info">
          <div className="header">
            <p className="company">{company}</p>
            <NewLabel />
            <FeaturedLabel />
          </div>
          <h3 className="position">{position}</h3>
          <div className="body-bottom">
            <p className="postedAt">{}postedAt</p>
            <p className="contract">{contract}</p>
            <p className="location">{location}</p>
          </div>
        </div>
        <div className="categories">
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default Post;

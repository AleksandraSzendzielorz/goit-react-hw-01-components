import user from '../jsonfolder/user.json';
const profileStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyConteent: 'center',
  backgroundColor: 'lightGray',
};

const userImage = {
  height: 200,
  backgroundColor: 'grey',
  borderRadius: 100,
  alignItems: 'center',
};
const userName = {
  color: 'black',
  height: 20,
  textAlignt: 'center',
};
const topProfileStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyConteent: 'center',
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};
const listyStyleLi = {
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
};

export const Profile = () => {
  return (
    <>
      <div style={profileStyle}>
        <div style={topProfileStyle}>
          <img
            style={userImage}
            src={user.avatar}
            alt="User avatar"
            className="avatar"
          />
          <p style={userName} className="name">
            {user.name}
          </p>
          <p className="tag">@{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>

        <ul style={listStyle} class="stats">
          <li style={listyStyleLi}>
            <span className="label">Followers</span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li style={listyStyleLi}>
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views} </span>
          </li>
          <li style={listyStyleLi}>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

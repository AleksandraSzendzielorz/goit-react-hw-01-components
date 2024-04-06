import user from '../jsonfolder/user.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const UserImage = styled.img`
  height: 200px;
  border-radius: 100;
  align-items: center;
  padding-top: 30px;
`;
const UserName = styled.p`
  color: black;
  height: 20px;
  text-align: center;
`;
const TopProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justif-content: center;
`;

const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
const ListyStyleLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Profile = () => {
  return (
    <>
      <ProfileStyle>
        <TopProfileStyle>
          <UserImage
            src={user.avatar}
            alt="User avatar"
            className="avatar"
          ></UserImage>
          <UserName>{user.name}</UserName>
          <p>@{user.tag}</p>
          <p>{user.location}</p>
        </TopProfileStyle>

        <ListStyle>
          <ListyStyleLi>
            <span>Followers</span>
            <span>{user.stats.followers}</span>
          </ListyStyleLi>
          <ListyStyleLi>
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views} </span>
          </ListyStyleLi>
          <ListyStyleLi>
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </ListyStyleLi>
        </ListStyle>
      </ProfileStyle>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

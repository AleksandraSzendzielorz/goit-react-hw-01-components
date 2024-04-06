import PropTypes from 'prop-types';
import styled from 'styled-components';

const LiFriendStyle = styled.li`
  border-style: outset;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 20px;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <LiFriendStyle>
      <span style={statusStyle}></span>
      <img src={avatar} alt="User avatar" width="70" />
      <p>{name}</p>
    </LiFriendStyle>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
};

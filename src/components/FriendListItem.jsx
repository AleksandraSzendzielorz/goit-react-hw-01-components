const liFriendStyle = {
  borderStyle: 'outset',
  display: 'flex',
  alignItems: 'center',
  gap: 30,
  paddingLeft: 20,
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <li style={liFriendStyle}>
      <span style={statusStyle}></span>
      <img src={avatar} alt="User avatar" width="70" />
      <p>{name}</p>
    </li>
  );
};

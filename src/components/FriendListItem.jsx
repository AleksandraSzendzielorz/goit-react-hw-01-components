export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <li>
      <span style={statusStyle}></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

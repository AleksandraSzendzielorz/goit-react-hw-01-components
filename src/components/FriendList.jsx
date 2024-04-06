import React from 'react';
import { FriendListItem } from './FriendListItem';

const ulFriendStyle = {
  listStyle: 'none',
  margin: 30,
  padding: 0,
};
export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArr;
  return (
    <ul style={ulFriendStyle} className={friendList}>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} {...friend}></FriendListItem>
      ))}
    </ul>
  );
};

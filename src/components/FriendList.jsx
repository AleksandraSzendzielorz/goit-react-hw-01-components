import React from 'react';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArr;
  return (
    <ul className={friendList}>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};

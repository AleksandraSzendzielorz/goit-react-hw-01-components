import React from 'react';
import { FriendListItem } from './FriendListItem';
import styled from 'styled-components';

const UlFriendStyle = styled.ul`
  list-style: none;
  margin: 30px;
  padding: 0;
`;
export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArr;
  return (
    <UlFriendStyle>
      {friendList.map(friend => (
        <FriendListItem key={friend.id} {...friend}></FriendListItem>
      ))}
    </UlFriendStyle>
  );
};

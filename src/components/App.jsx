import { Profile } from '../components/Profile';
import { Statistics } from '../components/Statistics';
import { FriendList } from '../components/FriendList';
import { TransactionHistory } from '../components/TransactionHistory';

import user from '../jsonfolder/user.json';
import data from '../jsonfolder/data.json';
import friends from '../jsonfolder/friends.json';
import items from '../jsonfolder/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        maxWidth: 650,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: 50,
      }}
    >
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

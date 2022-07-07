import { Profile } from 'components/ProfileTask/Profile/Profile';

console.log('Profile: ', Profile);

import { Statistics } from 'components/Statistics/Statistics';
import dataStatistics from '../../data/data';

import { FriendList } from 'components/FriendTask/FriendList/FriendList';
import dataFriends from '../../data/friends.json';

import { TransactionHistory } from 'components/Transaction/TransactionHistory/TransactionHistory';
import dataTransations from '../../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={dataFriends} />
      <TransactionHistory transactions={dataTransations} />
    </>
  );
};
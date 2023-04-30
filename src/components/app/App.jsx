import {Profile} from '../profile/Profile';
import {Statistics} from '../statistics/Statistics';
import {FriendList} from '../friendList/FriendList';
import {TransactionHistory} from '../transactionHistory/TransactionHistory';
import user from '../../data/user.json';
import stats from '../../data/stats.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json'
export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

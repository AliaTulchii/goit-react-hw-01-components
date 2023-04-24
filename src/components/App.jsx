import {Profile} from './Profile/Profile';
import user from './Profile/user.json';
import { Statistic } from './Statistics/Statistic';
import data from './Statistics/data.json'
import {FriendList} from './FriendsList/FriendList';
import friends from './FriendsList/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json'



export const App = () => {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />


      <Statistic title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />


    </div>
  );
};

import Profile from './Profile/Profile';
import user from '../components/Profile/user.json';
// import Statistics from './Statistics/Statistics';
import StatisticsTitle from './Statistics/StatisticsBoard'
import data from '../components/Statistics/data.json'
import FriendList from './FriendsList/FriendList';
import friends from './FriendsList/friends.json'



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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


      <StatisticsTitle title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />


    </div>
  );
};

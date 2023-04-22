import css from './FriendList.module.css'
import FriendListItem from './FriendListItem'

export default function FriendList({friends}) {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
                ))}
        </ul>
  )
    
    
    
}
import css from './FriendListItem.module.css'
import PropTypes from 'prop-types'

export default function FriendListItem(friends) {
    const { id, isOnline, avatar, name } = friends;
    
    return (
            <li className={css.item} key={id}>
            <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
            </li>
            
    )    
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
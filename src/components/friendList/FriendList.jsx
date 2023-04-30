import PropTypes from "prop-types";
import css from '../friendList/FriendList.module.css'

export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map((friend) => {
      return (
        <li key={friend.id} className={css.item}>
          <span className={`${friend.isOnline ? css.status_online : css.status_offline}`}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      );
    })}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  )
}

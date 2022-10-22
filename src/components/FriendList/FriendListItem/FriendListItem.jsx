import css from './FriendlistItem.module.css'
export const FriendListItem = ({avatar, name, isOnline }) => {return(
    <li className={css.card}>
  <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  {isOnline? <p className="isOnline">OffLine</p>:<p className="isOnline">Online</p>}
  

  <p className="name">{name}</p>
</li>
)}
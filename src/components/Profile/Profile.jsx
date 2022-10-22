import css from './Profile.module.css'
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.profileImg} />
        <p className={css.description}>{username}</p>
        <p className={css.smallTxt}>{tag}</p>
        <p className={css.smallTxt}>{location}</p>
      </div>

      <ul className={css.ulStats}>
        <li>
          <span className={css.smallTxt}>Followers</span>
          <span className={css.boldText}>{followers}</span>
        </li>
        <li>
          <span className={css.smallTxt}>Views</span>
          <span className={css.boldText}>{views}</span>
        </li>
        <li>
          <span className={css.smallTxt}>Likes</span>
          <span className={css.boldText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

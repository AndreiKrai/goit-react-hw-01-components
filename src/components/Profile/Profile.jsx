import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
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
          <span className={css.boldText}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.smallTxt}>Views</span>
          <span className={css.boldText}>{stats.views}</span>
        </li>
        <li>
          <span className={css.smallTxt}>Likes</span>
          <span className={css.boldText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

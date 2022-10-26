import css from '../Statistics.module.css'
import PropTypes from 'prop-types';
export const StatItem = ({label, percentage,style}) => {
  return (
    <li className={"item"} style={style} >
      <span className={css.smallTxt}>{label}</span>
      <span className={css.boldText}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes={
  label:PropTypes.string,
  percentage:PropTypes.number,
  style:PropTypes.shape({backgroundColor:PropTypes.string})
}
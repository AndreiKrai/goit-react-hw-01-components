import css from '../Statistics.module.css'
export const StatItem = ({label, percentage}) => {

  return (
    <li className={"item"} >
      <span className={css.smallTxt}>{label}</span>
      <span className={css.boldText}>{percentage}%</span>
    </li>
  );
};

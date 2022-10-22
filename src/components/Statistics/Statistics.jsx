import css from "./Statistics.module.css"
import PropTypes from 'prop-types';
import { StatItem } from './StatItem/StatItem'

export const Statistics = ({ title,data }) => {
  return (
  <section className={css.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={css.ulStats}>
        {data.map(element => (
          <StatItem 
          style={{backgroundColor:'red'}}
            key={element.id}
            label={element.label}
            percentage={element.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title:PropTypes.string,
  data:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string,label:PropTypes.string,percentage:PropTypes.number}))
}
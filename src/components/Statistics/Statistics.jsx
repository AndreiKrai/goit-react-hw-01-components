import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatItem } from './StatItem/StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={css.ulStats}>
        {stats.map(element => (
          <StatItem
            style={{ backgroundColor: getRandomHexColor() }}
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
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

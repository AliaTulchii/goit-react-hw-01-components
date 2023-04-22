import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({stats}) {
    return (
      <ul className={css.statlist}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
      </li>
        ))}
      
    </ul>
  )    
    
}


Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}).isRequired).isRequired
}


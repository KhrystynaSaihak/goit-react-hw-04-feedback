import PropTypes from 'prop-types';
import { StatisticList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number,
  feedbackPercentage: PropTypes.number,
};
import PropTypes from 'prop-types';

import { StatisticContainer, StatisticDiv } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticContainer>
      <StatisticDiv>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </StatisticDiv>
      <p>Total: {total}</p>
      <p>Positive feedbacks: {`${positivePercentage}%`}</p>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

import {
  FeedbackOptionsContainer,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsContainer>
      {options.map(option => {
        return (
          <FeedbackOptionsButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackOptionsButton>
        );
      })}
    </FeedbackOptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

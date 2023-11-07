import { FeedbackWrapper, FeedbackBtn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      {options.map(option => {
        return (
          <FeedbackBtn
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </FeedbackWrapper>
  );
};

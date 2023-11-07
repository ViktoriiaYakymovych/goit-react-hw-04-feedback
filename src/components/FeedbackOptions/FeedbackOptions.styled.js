import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
`;

export const FeedbackBtn = styled.button`
  min-width: 60px;
  padding: 4px 8px;
  background-color: #fff;
  border: black 2px solid;
  text-transform: capitalize;

  &:hover,
  &:focus {
    border: green 2px solid;
  }
`;

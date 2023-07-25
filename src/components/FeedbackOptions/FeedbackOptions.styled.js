import styled from '@emotion/styled';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FeedbackOptionsButton = styled.button`
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px black solid;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

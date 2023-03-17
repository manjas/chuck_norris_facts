import styled from 'styled-components';

export const JokeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  max-height: 90%;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 95%;
    align-items: center;
  }
`;

export const JokeListWrapper = styled.div`
  padding: 20px;
  max-height: 70%;
  overflow-y: auto;
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const SearchBarWrapper = styled.div`
  padding-bottom: 30px;
`;

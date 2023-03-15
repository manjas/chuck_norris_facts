import styled from 'styled-components';

export const JokeDetailsContainer = styled.div`
  width: 50%;
  padding: 9px 20px;
  box-shadow: 6px 7px 20px -2px rgba(120, 120, 120, 0.48);
  background-color: white;
  border-radius: 12.5px;
  display: flex;
  gap: 20px;
  position: absolute;
  align-items: center;
  top: 30%;
  > div {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  > img {
    max-width: 100px;
    height: auto;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom right, #ae8a73, #3d180d);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.5;
  padding: 0 1rem;
`;

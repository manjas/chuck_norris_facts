import styled from 'styled-components';

export const JokeDetailsContainer = styled.div`
  width: 50%;
  padding: 9px 20px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 12.5px;
  display: flex;
  gap: 20px;
  position: absolute;
  align-items: center;
  border-bottom: 3px solid #ae8a73;
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
  @media (max-width: 768px) {
    top: 5%;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    flex-direction: column;
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

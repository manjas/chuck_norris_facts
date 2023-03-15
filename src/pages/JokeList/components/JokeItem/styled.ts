import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const JokeItemWrapper = styled.div`
  max-height: 150px;
  width: 700px;
  margin-bottom: 6px;
  padding: 9px 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  background-color: white;
  transition: all 0.2s ease 0s;
  border-radius: 12.5px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  color: rgb(65, 66, 73);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  &:hover {
    background-color: #ae8a7236;
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

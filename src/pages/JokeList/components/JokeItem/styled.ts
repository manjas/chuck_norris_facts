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
  box-shadow: 6px 7px 20px -2px rgba(120, 120, 120, 0.48);
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
    background-color: rgb(242, 242, 242);
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

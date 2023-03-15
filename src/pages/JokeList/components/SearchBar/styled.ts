import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 35px;
  display: flex;
  min-width: 300px;
  align-items: center;
  padding-left: 20px;
  border-radius: 12px;
  padding-right: 20px;
  justify-content: space-between;
  border: 2px solid #442116;
`;
export const StyledButton = styled.button`
  background: linear-gradient(to bottom right, #99765e, #442116);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
`;

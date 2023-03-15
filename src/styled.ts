import styled from 'styled-components';
import chuckNorrisBg from './assets/images/chuck-norris-draw.jpg';

export const Container = styled.div`
  background: url(${chuckNorrisBg}) center/cover;
  backgroundposition: center;
  backgroundsize: cover;
  backgroundrepeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 50px;
  box-sizing: content-box;
  @media (max-width: 768px) {
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const HeaderLabel = styled.div`
  font-size: 80px;
  position: absolute;
  right: 0;
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 0.9;
  background: -webkit-linear-gradient(
    rgba(192, 154, 130, 1) 0%,
    rgba(119, 81, 61, 1) 32%,
    rgba(36, 17, 19, 1) 64%,
    rgba(19, 8, 7, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 37px;
    writing-mode: horizontal-tb;
    position: relative;
    margin: 20px 0 30px 0;
    background: linear-gradient(
      90deg,
      rgba(192, 154, 130, 1) 0%,
      rgba(119, 81, 61, 1) 32%,
      rgba(36, 17, 19, 1) 64%,
      rgba(19, 8, 7, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

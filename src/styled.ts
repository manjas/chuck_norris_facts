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
`;

export const HeaderLabel = styled.div`
  font-size: 80px;
  position: absolute;
  right: 0;
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 0.9;
  background: -webkit-linear-gradient(#99705e, #4a271d, #35160c, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

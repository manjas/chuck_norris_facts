import { useLocation, useNavigate } from 'react-router-dom';
import { IJoke } from '../../types';
import { JokeDetailsContainer, Button } from './styled';

const JokeDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { joke }: { joke: IJoke } = state;

  return (
    <>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <JokeDetailsContainer role='joke-details'>
        {/* since this image for some reason is not available on endpoint,
        in order to make application look better I added Chuck Norris facts API logo instead*/}
        {/* <img src={joke?.icon_url} alt='chucknorris_joke' /> */}
        <img
          src={'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'}
          alt='chucknorris_logo'
        />
        <div>{joke?.value}</div>
      </JokeDetailsContainer>
    </>
  );
};
export default JokeDetails;

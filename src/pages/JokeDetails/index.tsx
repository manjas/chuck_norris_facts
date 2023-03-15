import { useLocation, useNavigate } from 'react-router-dom';
import { IJoke } from '../../types';
import { JokeDetailsContainer, Button } from './styled';

const JokeDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { joke }: { joke: IJoke } = state;

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <JokeDetailsContainer>
        <img src={joke?.icon_url} alt='No image' />
        <div> {joke?.value}</div>
      </JokeDetailsContainer>
    </div>
  );
};
export default JokeDetails;

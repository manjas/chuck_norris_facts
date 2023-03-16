// types
import { IJoke } from '../../../../types';
// styled
import { JokeItemWrapper, StyledLink } from './styled';

type Props = {
  item: IJoke;
};
const JokeItem = ({ item }: Props) => {
  return (
    <StyledLink role='joke-item' to={`/details/${item.id}`} state={{ joke: item }}>
      <JokeItemWrapper>{item?.value}</JokeItemWrapper>
    </StyledLink>
  );
};

export default JokeItem;

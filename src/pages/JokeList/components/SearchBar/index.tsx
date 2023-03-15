import { StyledInput } from './styled';

type Props = {
  setQuery: (value: string) => void;
};

const SearchBar = ({ setQuery }: Props) => {
  const onChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTermInput = event.target.value;
    setQuery(searchTermInput);
  };

  return (
    <StyledInput type='text' placeholder='Search Chuck Norris Jokes' onChange={onChangeTextField} />
  );
};
export default SearchBar;

import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { useSearch } from '../../services/hooks/useSearch';
import useDebounce from '../../services/hooks/useDebounce.js';

interface SearchInputProps {
  onChange: (search: string) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  const { displayedText, setDisplayedtText } = useSearch();

  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(owner: string) {
    setDisplayedtText(owner);
    debouncedChange(owner);
  }

  return (
    <InputGroup maxWidth="60">
      <Input
        borderRadius="20"
        placeholder="Buscar"
        focusBorderColor="pink.500"
        _placeholder={{ color: 'pink.500', opacity: 1 }}
        onChange={event => handleChange(event.target.value)}
        value={displayedText}
      />

      <InputRightElement>
        <Button
          variant="link"
          size="100%"
          backgroundColor="white"
          mr="4"
          _hover={{ backgroundColor: 'white' }}
        >
          <Img src="/assets/icons/search.svg" />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

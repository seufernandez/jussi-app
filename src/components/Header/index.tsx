import Icon from '@chakra-ui/icon';
import { Img } from '@chakra-ui/image';
import { Box, HStack, Spacer, Text } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { api } from '../../services/api';
import { useSearch } from '../../services/hooks/useSearch';
import SearchInput from '../SearchInput/index';

export default function Header() {
  const { setItems, searchedText, setSearchedText } = useSearch();

  useEffect(() => {
    if (searchedText) {
      api
        .get(`/anime?filter[text]=${searchedText}&page[limit]=12`)
        .then(res => setItems(res.data.data));
    }
  }, [searchedText]);

  return (
    <HStack h="20" px="6" py="5" spacing="8">
      <Link href="/">
        <a>
          <Box mr="4">
            <Img src="/assets/logoJussi.svg" alt="Jussi Logo" />
          </Box>
        </a>
      </Link>
      <Text as="button" transition=".2s" _hover={{ color: 'pink.500' }}>
        Nossas soluções
      </Text>
      <Text as="button" transition=".2s" _hover={{ color: 'pink.500' }}>
        Conheça a Jüssi
      </Text>
      <Spacer />

      <SearchInput onChange={(search: string) => setSearchedText(search)} />

      <Text as="button" transition=".2s" _hover={{ color: 'pink.500' }}>
        Login
      </Text>
      <Box
        as="button"
        p="0"
        minWidth="48px"
        transition=".2s"
        _hover={{ color: 'pink.500' }}
      >
        <Icon as={FiShoppingCart} w={6} h={6} />
      </Box>
    </HStack>
  );
}

import { Box, Grid, Text, HStack, VStack, Spacer } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import { Spinner } from '@chakra-ui/spinner';
import { useSearch } from '../../services/hooks/useSearch';

export default function ProductsList() {
  const {
    items,
    setItems,
    setSearchedText,
    setDisplayedtText,
    searchIsLoading,
  } = useSearch();

  function resetSearch() {
    setSearchedText('');
    setItems([]);
    setDisplayedtText('');
  }

  return (
    <>
      <Box minHeight="100vh" p="4" backgroundColor="gray.100">
        {items.length > 0 ? (
          <>
            <HStack mx="4" mb="4">
              <Text align="center" fontSize="sm">
                Encontramos {items.length} resultados com essa palavra
              </Text>
              <Spacer />
              <Button
                size="sm"
                variant="ghost"
                colorScheme="pink"
                _hover={{ backgroundColor: 'pink.100' }}
                onClick={() => {
                  resetSearch();
                }}
              >
                Sair da Pesquisa
              </Button>
            </HStack>
            <Grid
              templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)']}
              gap={6}
            >
              {items.map(item => {
                return (
                  <Box
                    key={item.id}
                    borderRadius="xl"
                    h="320"
                    p="2"
                    align="left"
                    backgroundColor="white"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '0 0 1px 2px #240e1e10, 0 1px 1px #00000011',
                    }}
                  >
                    <VStack h="100%" w="100%">
                      <Text
                        w="100%"
                        px="2"
                        align="left"
                        fontWeight="bold"
                        noOfLines={2}
                      >
                        {item.attributes.canonicalTitle}
                      </Text>
                      <Text
                        w="100%"
                        px="2"
                        lineHeight="1.2"
                        align="left"
                        noOfLines={3}
                        fontSize="sm"
                        color="pink.400"
                      >
                        {item.attributes.synopsis}
                      </Text>
                      <Spacer />
                      <Box w="100%">
                        <Img
                          borderRadius="xl"
                          height="40"
                          w="100%"
                          src={item.attributes.posterImage.large}
                          objectFit="cover"
                          objectPosition="top"
                        />
                      </Box>
                    </VStack>
                  </Box>
                );
              })}
            </Grid>
          </>
        ) : (
          <>
            {searchIsLoading === true ? (
          <HStack h="20" justify="center" w="100%">
            <Spinner color="pink.500" />
          </HStack>
            ) : (
              <Text>
                Ops, não encontramos nada relacionado a essa pesquisa :/
              </Text>
            )}
          </>
        )}
      </Box>
    </>
  );
}

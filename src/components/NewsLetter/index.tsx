import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

export default function NewsLetter() {
  return (
    <HStack backgroundColor="black" h="480px" align="center" justify="center">
      <VStack w="600px" align="center" spacing="8">
        <Text color="white" fontSize="4xl" align="center">
          RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.
        </Text>
        <Box w="480px">
          <InputGroup w="100%" colorScheme="green">
            <Input
              variant="flushed"
              size="lg"
              color="gray.200"
              colorScheme="green"
              placeholder="Digite seu e-mail"
              focusBorderColor="green.500"
            />
            <InputRightElement>
              <Button
                variant="ghost"
                colorScheme="green"
                size="xl"
                p="2"
                mr="10"
                _hover={{ backgroundColor: 'green.900' }}
                _active={{
                  bg: '#2bc47031',
                  transform: 'scale(0.98)',
                }}
              >
                Cadastrar
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>
    </HStack>
  );
}

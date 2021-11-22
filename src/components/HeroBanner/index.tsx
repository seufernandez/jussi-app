import { Box, HStack, VStack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';

export default function HeroBanner() {
  return (
    <VStack
      py="40px"
      w="100%"
      backgroundColor="green.500"
      align="center"
      justify="center"
      spacing="0"
    >
      <HStack h="480px" justify="center">
        <Box w="40%" justify="left">
          <Text fontSize="6xl" lineHeight="76px">
            CRIAMOS LOJAS QUE VENDEM MAIS.
          </Text>

          <Text fontSize="xl" marginTop="16px">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </Text>

          <Box w="100%" marginTop="32px" justifyContent="left">
            <Button
              variant="outline"
              colorScheme="black"
              _hover={{
                color: 'green.500',
                backgroundColor: 'black',
                borderColor: 'black',
              }}
            >
              Veja nossas soluções
            </Button>
          </Box>
        </Box>

        <VStack h="100%" w="50%" align="center">
          <Box display="grid" position="relative">
            <Box
              w="200px"
              pt="8"
              align="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="1px 24px 42px #00000060"
              position="absolute"
              zIndex="5"
              top="0"
              right="-48"
            >
              <Img src="assets/products/blender.png" alt="Blender" />
              <Button
                colorScheme="pink"
                variant="outline"
                borderRadius="20px"
                color="pink.500"
                borderColor="pink.500"
                marginY="4"
                fontWeight="medium"
              >
                Comprar em 12x
              </Button>
            </Box>

            <Box
              w="200px"
              pt="8"
              align="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="1px 24px 42px #00000060"
              position="absolute"
              zIndex="3"
              top="28"
              right="-16"
            >
              <Img src="assets/products/fridge.png" alt="Fridge" />
              <Button
                colorScheme="pink"
                variant="outline"
                borderRadius="20px"
                color="pink.500"
                borderColor="pink.500"
                marginY="4"
                fontWeight="medium"
              >
                Mais detalhes
              </Button>
            </Box>

            <Box
              w="200px"
              pt="8"
              align="center"
              backgroundColor="white"
              borderRadius="8px"
              boxShadow="1px 24px 42px #00000060"
              position="absolute"
              zIndex="4"
              top="52"
              left="24"
            >
              <Img src="assets/products/whisky.png" alt="whisky" />
              <Button
                colorScheme="pink"
                variant="outline"
                borderRadius="20px"
                color="pink.500"
                borderColor="pink.500"
                marginY="4"
                fontWeight="medium"
              >
                Adicionar à sacola
              </Button>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}

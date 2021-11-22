import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';

export default function JussiSession() {
  return (
    <HStack
      position="relative"
      w="100%"
      h="648px"
      align="center"
      justify="center"
    >
      <Box
        position="absolute"
        right="0"
        backgroundColor="gray.100"
        h="100%"
        w="50%"
        zIndex="-1"
      />

      <VStack w="40%">
        <Box w="240px" align="left">
          <Text fontSize="4xl" fontWeight="bold">
            OLÁ, SOMOS A JÜSSI
          </Text>

          <Text mt="8">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </Text>

          <Button
            mt="8"
            variant="outline"
            colorScheme="black"
            _hover={{
              color: 'white',
              backgroundColor: 'pink.500',
              borderColor: 'pink.500',
            }}
          >
            Conheça a Jüssi
          </Button>
        </Box>
      </VStack>

      <Box w="60%">
        <Img
          h="520px"
          w="676px"
          objectFit="cover"
          src="assets/jussiOffice.png"
        />
      </Box>
    </HStack>
  );
}

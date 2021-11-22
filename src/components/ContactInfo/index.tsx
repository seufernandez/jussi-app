import { Box, HStack, Text } from '@chakra-ui/layout';

export default function ContactInfo() {
  return (
    <HStack
      backgroundColor="pink.500"
      h="480px"
      align="center"
      justify="center"
    >
      <Box w="600px" align="center">
        <Text color="white" fontSize="4xl">
          ESSA LOJA FOI CONSTRUÍDA USANDO UMA DAS NOSSAS SOLUÇÕES DA PLATAFORMA
          VTEX. TENHA A SUA.
        </Text>
        <Box mt="4">
          <Text color="white">Entre em contato</Text>
          <Text color="white" fontSize="4xl">
            comercial@jussi.com.br
          </Text>
        </Box>
      </Box>
    </HStack>
  );
}

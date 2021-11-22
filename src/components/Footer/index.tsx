import { HStack, Box, Spacer } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Icon } from '@chakra-ui/icon';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <HStack h="80px" backgroundColor="black" align="center" justify="center">
      <HStack w="1024px">
        <Box>
          <Img src="/assets/wppcompany.png" />
        </Box>
        <Spacer />
        <Box
          as="button"
          color="white"
          minWidth="48px"
          transition=".2s"
          _hover={{ color: 'gray.500' }}
        >
          <Icon as={BsInstagram} w={6} h={6} />
        </Box>
        <Box
          as="button"
          color="white"
          minWidth="48px"
          transition=".2s"
          _hover={{ color: 'gray.500' }}
        >
          <Icon as={FaFacebookF} w={6} h={6} />
        </Box>
        <Box
          as="button"
          color="white"
          minWidth="48px"
          transition=".2s"
          _hover={{ color: 'gray.500' }}
        >
          <Icon as={FaLinkedinIn} w={8} h={8} />
        </Box>
      </HStack>
    </HStack>
  );
}

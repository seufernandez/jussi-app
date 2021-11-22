import { HStack, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import { BsArrowRight } from 'react-icons/bs';
import { Img } from '@chakra-ui/image';

export default function LogoBar() {
  return (
    <HStack
      backgroundColor="gray.100"
      height="80px"
      justify="center"
      spacing="12"
    >
      <Text>Nossas principais lojas VTEX</Text>
      <Icon as={BsArrowRight} />
      <Img src="assets/logos/logo-brastemp.png" />
      <Img src="assets/logos/logo-compracerta.png" />
      <Img src="assets/logos/logo-consul.png" />
      <Img src="assets/logos/logo-thebar.png" />
    </HStack>
  );
}

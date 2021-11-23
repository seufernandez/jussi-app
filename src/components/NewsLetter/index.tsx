import { Box, HStack, Text, VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function NewsLetter() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const motionItem = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 42 },
  };

  return (
    <HStack backgroundColor="black" h="480px" align="center" justify="center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={motionItem}
        transition={{ duration: 1, times: [0, 0.6, 1] }}
      >
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
      </motion.div>
    </HStack>
  );
}

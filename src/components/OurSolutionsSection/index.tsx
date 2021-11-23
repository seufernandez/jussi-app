/* eslint-disable react/jsx-no-comment-textnodes */
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, ListItem, Spacer, Text, UnorderedList } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

export default function OurSolutionsSection() {
  const motionItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -42 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={motionItem}
      transition={{ duration: 1, times: [0, 0.7, 1] }}
    >
      <Box my="14" align="center">
        <Box align="left" w="5xl">
          <Text fontSize="4xl" fontWeight="bold" mb="4">
            <Text
              as="span"
              color="green.500"
              fontWeight="bold"
              fontSize="4xl"
              mr="1"
            >
              //
            </Text>
            NOSSAS SOLUÇÕES
          </Text>
        </Box>

        <HStack justify="center" spacing="5" w="5xl">
          <VStack
            w="60"
            h="96"
            border="2px"
            borderColor="gray.200"
            align="left"
            borderRadius="4px"
          >
            <Avatar size="xl" name="P 1" ml="4" mt="4" />
            <Spacer />

            <Box p="4" align="left">
              <Text>Nome do Produto #1</Text>
              <Text mt="4" fontSize="sm" color="pink.500">
                Descrição do Produto #1
              </Text>
              <UnorderedList mt="4">
                <ListItem fontSize="sm">Feature 1</ListItem>
                <ListItem fontSize="sm">Feature 2</ListItem>
                <ListItem fontSize="sm">Feature 3</ListItem>
              </UnorderedList>

              <Button w="100%" mt="4" colorScheme="green" color="black">
                Ver solução
              </Button>
            </Box>
          </VStack>

          <VStack
            w="60"
            h="96"
            border="2px"
            borderColor="gray.200"
            align="left"
            borderRadius="4px"
          >
            <Avatar size="xl" name="P 2" ml="4" mt="4" />
            <Spacer />

            <Box p="4" align="left">
              <Text>Nome do Produto #2</Text>
              <Text mt="4" fontSize="sm" color="pink.500">
                Descrição do Produto #2
              </Text>
              <UnorderedList mt="4">
                <ListItem fontSize="sm">Feature 1</ListItem>
                <ListItem fontSize="sm">Feature 2</ListItem>
                <ListItem fontSize="sm">Feature 3</ListItem>
              </UnorderedList>

              <Button w="100%" mt="4" colorScheme="green" color="black">
                Ver solução
              </Button>
            </Box>
          </VStack>

          <VStack
            w="60"
            h="96"
            border="2px"
            borderColor="gray.200"
            align="left"
            borderRadius="4px"
          >
            <Avatar size="xl" name="P 3" ml="4" mt="4" />
            <Spacer />

            <Box p="4" align="left">
              <Text>Nome do Produto #3</Text>
              <Text mt="4" fontSize="sm" color="pink.500">
                Descrição do Produto #3
              </Text>
              <UnorderedList mt="4">
                <ListItem fontSize="sm">Feature 1</ListItem>
                <ListItem fontSize="sm">Feature 2</ListItem>
                <ListItem fontSize="sm">Feature 3</ListItem>
              </UnorderedList>

              <Button w="100%" mt="4" colorScheme="green" color="black">
                Ver solução
              </Button>
            </Box>
          </VStack>

          <VStack
            w="60"
            h="96"
            border="2px"
            borderColor="gray.200"
            align="left"
            borderRadius="4px"
          >
            <Avatar size="xl" name="P 4" ml="4" mt="4" />
            <Spacer />

            <Box p="4" align="left">
              <Text>Nome do Produto #4</Text>
              <Text mt="4" fontSize="sm" color="pink.500">
                Descrição do Produto #4
              </Text>
              <UnorderedList mt="4">
                <ListItem fontSize="sm">Feature 1</ListItem>
                <ListItem fontSize="sm">Feature 2</ListItem>
                <ListItem fontSize="sm">Feature 3</ListItem>
              </UnorderedList>

              <Button w="100%" mt="4" colorScheme="green" color="black">
                Ver solução
              </Button>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  );
}

/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
} from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import ConctactForm from '../features/contact/ContactForm';

const ContactPage = () => (
  <Container maxW="full" mt={0} centerContent overflow="hidden">
    <Flex>
      <Box
        bg="brand.lightBlue"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box p={4}>
          <Wrap spacing={{
            base: 20, sm: 3, md: 5, lg: 20,
          }}
          >
            <WrapItem>
              <Box>
                <Heading textAlign="center">Contacto</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Rellene el siguiente formulario para contactar
                </Text>
                <Box py={{
                  base: 5, sm: 5, md: 8, lg: 10,
                }}
                >
                  <VStack pl={0} spacing={3} alignItems="center">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: 'none' }}
                      _active={{ border: 'none' }}
                      leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    >
                      +54-1160112988
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: 'none' }}
                      _active={{ border: 'none' }}
                      leftIcon={<MdEmail color="#1970F1" size="20px" />}
                    >
                      somosfundacionmas@gmail.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: 'none' }}
                      _active={{ border: 'none' }}
                      leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                    >
                      Buenos Aires, Argentina
                    </Button>
                  </VStack>
                </Box>

                <HStack style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="http://www.facebook.com/somos_mas" target="_blank">
                    <IconButton

                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound
                      _hover={{ bg: '#0D74FF' }}
                      icon={(
                        <MdFacebook size="28px" />
                      )}
                    />
                  </a>
                  <a href="http://www.instagram.com/SomosMas" target="_blank">
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsInstagram size="28px" />}
                    />
                  </a>
                </HStack>
              </Box>
            </WrapItem>
            <ConctactForm />

          </Wrap>
        </Box>
      </Box>
    </Flex>
  </Container>
)
export default ContactPage;

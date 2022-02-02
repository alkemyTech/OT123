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
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import {  BsInstagram, BsPerson } from 'react-icons/bs';
  import * as yup from "yup";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  


  export default function Contact() {

    const initValues = {
      name: "",
      email: "",
      message: "",
    };
  
    const [initialValue, setinitialValue] = useState(initValues);
  
     const REQUIRED_VALIDATION = (label) => {
      return `El ${label} es requerido!`;
    };
  
    const schema = yup
      .object()
      .shape({
        name: yup.string().required(REQUIRED_VALIDATION("nombre")),
        email: yup.string().email().required(REQUIRED_VALIDATION("email")),
        message: yup.string().required(REQUIRED_VALIDATION("mensaje")),
      
      })
      .required();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onTouched",
      reValidateMode: "onSubmit",
      resolver: yupResolver(schema),
      defaultValues: initialValue,
    });
  
    const onSubmit = (values) => {
      console.log("Values::::::", values);
    };
  
    const onError = (error) => {
      console.log("Error:::::::", error);
    };

    return (
      <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="brand.lightBlue"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Rellene el siguiente formulario para contactar
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: 'none' }}
                        _active={{ border: 'none' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
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
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
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
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Buenos Aires, Argentina
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
               <a href="http://www.facebook.com/somos_mas" target="_blank">
                    <IconButton
               
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" 
                     
                      />}

                    />
                    </a>
                    <a href="http://www.instagram.com/SomosMas" target="_blank">
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsInstagram size="28px" />}
                    />
                  </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit(onSubmit, onError)}>
       
       
        <FormControl id="name">
          <FormLabel htmlFor="name">Nombre *</FormLabel>
          <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
          <Input id="name" type="text" {...register("name")} size="md"/>
                            </InputGroup>
          {errors && errors.name && (
            <FormHelperText color="red">
              {errors.name.message && errors.name.message}
            </FormHelperText>
          )}
        </FormControl>
    
        <FormControl marginY={'5'} >
          <FormLabel htmlFor="email">Email *</FormLabel>
          <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
          <Input id="email" type="email" {...register("email")} />
          </InputGroup>
          {errors && errors.email && (
            <FormHelperText color="red">
              {errors.email.message && errors.email.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="message">Mensaje *</FormLabel>
          <Textarea id="message" type="text" {...register("message")} />
          {errors && errors.message && (
            <FormHelperText color="red">
              {errors.message.message && errors.message.message}
            </FormHelperText>
          )}
        </FormControl>
        
        <Button type="submit"   bg="brand.yellow" marginY={'5'}>
          Enviar mensaje
        </Button>
      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    );
  }


 
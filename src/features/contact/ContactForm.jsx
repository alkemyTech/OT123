/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Formik, Form,
} from 'formik'
import {
  Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement, Textarea, VStack, WrapItem,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdOutlineEmail } from 'react-icons/md';
import * as yup from 'yup';
import { contactSchema } from '../../validation'

const ConctactForm = () => {
  const initValues = {
    name: '',
    email: '',
    message: '',
  };

  const [initialValue, setinitialValue] = useState(initValues);

  const REQUIRED_VALIDATION = (label) => `El ${label} es requerido!`;

  const schema = yup
    .object()
    .shape({
      name: yup.string().required(REQUIRED_VALIDATION('nombre')),
      email: yup.string().email().required(REQUIRED_VALIDATION('email')),
      message: yup.string().required(REQUIRED_VALIDATION('mensaje')),

    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const onSubmit = (values) => {
    console.log('Values::::::', values);
  };

  const onError = (error) => {
    console.log('Error:::::::', error);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        message: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>

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
                      // eslint-disable-next-line react/no-children-prop
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input id="name" type="text" {...register('name')} size="md" />
                    </InputGroup>
                    {errors && errors.name && (
                    <FormHelperText color="red">
                      {errors.name.message && errors.name.message}
                    </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl marginY="5">
                    <FormLabel htmlFor="email">Email *</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input id="email" type="email" {...register('email')} />
                    </InputGroup>
                    {errors && errors.email && (
                    <FormHelperText color="red">
                      {errors.email.message && errors.email.message}
                    </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="message">Mensaje *</FormLabel>
                    <Textarea id="message" type="text" {...register('message')} />
                    {errors && errors.message && (
                    <FormHelperText color="red">
                      {errors.message.message && errors.message.message}
                    </FormHelperText>
                    )}
                  </FormControl>

                  <Button type="submit" bg="brand.yellow" marginY="5">
                    Enviar mensaje
                  </Button>
                </form>
              </VStack>
            </Box>
          </Box>
        </WrapItem>
      </Form>
    </Formik>
  )
}
export default ConctactForm;

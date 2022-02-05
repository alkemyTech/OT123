import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Heading,
  HStack,
  VStack,
  Button,
  Image,
  FormLabel,
  Input,
  Spacer,
} from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import TextField from '../TextField'

const TestimonialForm = () => (
  <Formik
    enableReinitialize
    initialValues={{
      name: '',
      image: '',
      content: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .required('Nombre requerido!')
        .min(3, 'Nombre muy corto!'),
    })}
    onSubmit={() => {}}
  >
    {(formik) => (
      <HStack display="flex" height="100vh" backgroundColor="#FAFA88">
        <VStack
          as="form"
          m="auto"
          p="2"
          w={{ base: '90%', md: 500 }}
          h="auto"
          justifyContent="center"
          borderWidth="1px solid white"
          borderRadius="lg"
          boxShadow="lg"
          backgroundColor="white"
          display="block"
          onSubmit={formik.handleSubmit}
        >
          <Heading align="center">Testimonio</Heading>
          <TextField name="name" placeholder="Name" />
          <Spacer />
          <CKEditor name="content" editor={ClassicEditor} />
          <FormLabel paddingLeft="2">Imagen</FormLabel>
          <Input
            id="filePicker"
            width="230px"
            display="block"
            border-radius="5px"
            padding="4px 5px"
            cursor="pointer"
            type="file"
          />
          <Image
            src="https://nypost.com/wp-content/uploads/sites/2/2021/12/nature_14.jpg?quality=80&strip=all&w=744"
            objectFit="cover"
          />
          <Button type="submit" w="100%">
            Guardar
          </Button>
        </VStack>
      </HStack>
    )}
  </Formik>
)

export default TestimonialForm

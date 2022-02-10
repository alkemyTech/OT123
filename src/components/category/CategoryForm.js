import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Heading,
  HStack,
  VStack,
  Button,
  FormLabel,
  Input,
  Spacer,
  FormControl,
  Textarea,
} from '@chakra-ui/react'
import { add, getOne, update } from '../../services/CategoriesService'
import Alert from '../alert/Alert'

const CategoryForm = () => {
  const { id } = useParams()
  const [categoryData, setCategoryData] = useState({
  })
  const [ready, setReady] = useState(false)
  const [alerts, setAlerts] = useState({
    show: false,
    title: '',
    message: '',
    icon: '',
    onConfirm: () => { },
  })
  const loadCategoryData = async () => {
    if (id) {
      try {
        const loadedCategoryData = await getOne(id)
        setCategoryData({
          id: loadedCategoryData.data.result.id,
          name: loadedCategoryData.data.result.name,
          description: loadedCategoryData.data.result.description,
        })
        setReady(true)
      } catch (error) {
        const errorAlert = {
          show: true,
          title: 'Ooops, algo ha fallado!',
          message: error.message,
          icon: 'error',
          onConfirm: () => { },
        }
        setAlerts(errorAlert)
      }
    }
  }
  useEffect(() => {
    loadCategoryData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateChangeHandler = async (values) => {
    const updatedCategory = await update(id, {
      name: values.name,
      content: categoryData.content,
      image: categoryData.image,
    })
    if (updatedCategory) {
      const successAlert = {
        show: true,
        title: 'Categoria',
        message: 'La categoría se ha actualizado!',
        icon: 'success',
        onConfirm: () => { },
      }
      setAlerts(successAlert)
    }
  }

  const AddSubmitHandler = async (values) => {
    try {
      const newCategory = await add({
        name: values.name,
        description: values.content,
      })
      if (newCategory) {
        const successAlert = {
          show: true,
          title: 'Categoria',
          message: 'Categoria agregada!',
          icon: 'success',
          onConfirm: () => { },
        }
        setAlerts(successAlert)
      }
    } catch (error) {
      const errorAlert = {
        show: true,
        title: 'hubo un error!',
        message: error.message,
        icon: 'error',
        onConfirm: () => { },
      }
      setAlerts(errorAlert)
    }
  }

  return (
    <>
      <Alert {...alerts} />
      {((id && ready) || !id) && (
      <Formik
        initialValues={categoryData}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Nombre requerido!')
            .min(3, 'Nombre muy corto!'),
        })}
        onSubmit={(values) =>
          (id ? updateChangeHandler(values) : AddSubmitHandler(values))}
      >
        {({ values, handleSubmit, handleChange }) => (
          <HStack
            display="flex"
            height="100vh"
            backgroundColor="#FAFA88"
            width="100%"
          >
            <VStack
              as="form"
              m="auto"
              p="2"
              w={{ base: '90%', md: 400, sm: 300 }}
              h="auto"
              justifyContent="center"
              borderWidth="1px solid white"
              borderRadius="lg"
              boxShadow="lg"
              backgroundColor="white"
              display="block"
              onSubmit={handleSubmit}
            >
              <Heading align="center">Categoría</Heading>
              <FormControl>
                <FormLabel paddingLeft="2">Nombre</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </FormControl>
              <Spacer />
              <FormControl>
                <FormLabel paddingLeft="2">Descripción</FormLabel>
                <Textarea
                  type="text"
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </FormControl>
              <Button type="submit" w="100%">
                Guardar
              </Button>
            </VStack>
          </HStack>
        )}
      </Formik>
      )}
    </>
  )
}

export default CategoryForm

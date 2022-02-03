import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required').min(3, 'Too Short!'),
})

export default loginSchema

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email().required('El email es requerido'),
  message: Yup.string().required('El mensaje es requerido'),

})

/* eslint-disable react/prop-types */
import {
  Box, Center, Flex, SimpleGrid, Text,
} from '@chakra-ui/layout'
import {
  Avatar, chakra, Icon, Textarea, useColorModeValue, FormControl, FormLabel, Button, ButtonGroup,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { setAlertData } from '../../../app/slices/alert';
import Title from '../../../components/pageUtils/Title/Title';
import useUser from '../../../hooks/useUser';
import { addTestimonial, getTestimonialPagination } from '../../../services/testimonialsService';

const backgrounds = [
  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")',
  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'457.367\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 457.367 123.926)\' fill=\'%23ED8936\'/%3E%3Cellipse cx=\'160.427\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 160.427 61.0737)\' fill=\'%2348BB78\'/%3E%3Cellipse cx=\'193.808\' cy=\'111.771\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 193.808 111.771)\' fill=\'%230BC5EA\'/%3E%3Cellipse cx=\'337.295\' cy=\'74.415\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 337.295 74.415)\' fill=\'%23ED64A6\'/%3E%3C/svg%3E")',
  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED8936\'/%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%2348BB78\'/%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%230BC5EA\'/%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED64A6\'/%3E%3C/svg%3E")',
  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'457.367\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 457.367 123.926)\' fill=\'%23ECC94B\'/%3E%3Cellipse cx=\'160.427\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 160.427 61.0737)\' fill=\'%239F7AEA\'/%3E%3Cellipse cx=\'193.808\' cy=\'111.771\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 193.808 111.771)\' fill=\'%234299E1\'/%3E%3Cellipse cx=\'337.295\' cy=\'74.415\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 337.295 74.415)\' fill=\'%2348BB78\'/%3E%3C/svg%3E")',
];

export const TestmonialCard = ({
  firstName, lastName, createdAt, content, image, index,
}) => (
  <Flex
    borderRadius="lg"
    boxShadow="lg"
    borderWidth="1px solid white"
    border="2px solid black"
    maxW="640px"
    direction={{ base: 'column-reverse', md: 'row' }}
    width="full"
    rounded="xl"
    p={10}
    justifyContent="space-between"
    position="relative"
    backgroundColor="#ccebff"
    _after={{
      content: '""',
      position: 'absolute',
      height: '21px',
      width: '29px',
      left: '35px',
      top: '-10px',
      backgroundSize: 'cover',
      backgroundImage: 'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'29\' height=\'21\' viewBox=\'0 0 29 21\' fill=\'none\'%3E%3Cpath d=\'M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z\' fill=\'%239F7AEA\'/%3E%3C/svg%3E")',
    }}
    _before={{
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      height: 'full',
      maxW: '640px',
      width: 'full',
      filter: 'blur(40px)',
      transform: 'scale(0.98)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: 0,
      left: 0,
      backgroundImage: backgrounds[index % 4],
    }}
  >
    <Flex
      direction="column"
      textAlign="left"
      justifyContent="space-between"
    >
      <chakra.p
        fontFamily="Inter"
        fontWeight="medium"
        fontSize="15px"
        pb={4}
      >
        {content}
      </chakra.p>
      <chakra.p fontFamily="Work Sans" fontWeight="bold" fontSize={14}>
        { firstName }
        {' '}
        {lastName}
        <chakra.span
          fontFamily="Inter"
          fontWeight="medium"
          color="gray.500"
        >
          {' '}
          -
          {' '}
          {moment(createdAt).fromNow()}
        </chakra.span>
      </chakra.p>
    </Flex>
    <Avatar
      src={image}
      height="80px"
      width="80px"
      alignSelf="center"
      m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
    />
  </Flex>
)

// eslint-disable-next-line react/function-component-definition
export default function ListTestimonials() {
  const [allTestimonials, setAllTestimonials] = useState([])
  const [onLoading, setOnLoading] = useState(false)
  const [sendTestimonial, setSendTestimonial] = useState('')
  const [errorSendTestimonial, setErrorSendTestimonial] = useState(false)
  const { isLoggedIn } = useUser()
  const userId = useUser().userData.payload.persistedReducer.userData?.dataValues.id
  const dispatch = useDispatch()

  let currentPage = 0
  const loadData = () => {
    getTestimonialPagination(20, currentPage)
      .then((result) => setAllTestimonials(
        (prev) => [...prev, ...result.data.result.rows],
      ))
    currentPage += 1
  }

  const handleScroll = (e) => {
    const { scrollHeight } = e.target.documentElement;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight,
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadData();
    }
  };

  useEffect(() => {
    loadData()
    window.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoading])

  const onChange = (e) => {
    setSendTestimonial(e.target.value);
    if (sendTestimonial.length < 19) {
      setErrorSendTestimonial(true)
    } else { setErrorSendTestimonial(false) }
  }
  const onSubmit = async () => {
    if (!errorSendTestimonial) {
      setOnLoading(true)
      try {
        const data = await addTestimonial({
          userId,
          content: sendTestimonial,
        })
        if (data) {
          setOnLoading(false)
          const successAlert = {
            show: true,
            title: 'Testimonio',
            message: 'Testimonio creado con exito!',
            icon: 'success',
            onConfirm: () => {},
          }
          dispatch(setAlertData(successAlert))
        }
      } catch (error) {
        dispatch(setAlertData({
          show: true,
          title: 'Testimonio',
          message: 'Hubo un error al enviar el testimonio!',
          icon: 'error',
          onConfirm: () => {},

        }))
      }
    }
  }
  return (
    <Flex
      backgroundColor="#f2f2f2"
      textAlign="center"
      pt={10}
      justifyContent="center"
      direction="column"
      width="full"
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
        <Title title="TESTIMONIOS" fontSize={30} />

        <chakra.h3
          fontWeight="bold"
          fontSize={20}
          textTransform="uppercase"
          color="#6fdc6f"
        >
          LA GENTE NOS APOYA
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight="bold"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Estamos en buenas manos
        </chakra.h1>
        <chakra.h2
          margin="auto"
          width="70%"
          fontWeight="medium"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          ¡Vea por qué más de
          {' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150+
          </chakra.strong>
          {' '}
          personas confian en nosotros!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing="20"
        mt={16}
        mx="auto"
      >
        {allTestimonials
        && allTestimonials?.map((cardInfo, index) => (
          <TestmonialCard {...cardInfo} index={index} key={cardInfo.id} />
        ))}
      </SimpleGrid>
      { isLoggedIn
      && (
      <Center>
        <FormControl
          w={{ base: '90%', md: '70%' }}
          id="name"
          marginTop={20}
        >
          <FormLabel>Escribe tu testimonio</FormLabel>
          <Textarea
            backgroundColor="white"
            borderColor="gray.300"
            _hover={{
              borderRadius: 'gray.300',
            }}
            paddingBottom="4"
            placeholder="Escribe lo que piensas..."
            onChange={(e) => onChange(e)}
          />
          <ButtonGroup padding="4" float="right">
            <Button
              border="2px solid black"
              backgroundColor="#d6f5d6"
              _hover={{
                backgroundColor: '#6fdc6f',
              }}
              fontWeight="bold"
              onClick={onSubmit}
            >
              Enviar

            </Button>
          </ButtonGroup>
          { errorSendTestimonial
          && <Text color="red"> Mensaje vacio o muy corto, minimo 20 caracteres </Text>}
        </FormControl>
      </Center>
      )}
      <Box paddingBottom="4">
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color="#2DCC0A">
          <path
            fill="currentColor"
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
  );
}

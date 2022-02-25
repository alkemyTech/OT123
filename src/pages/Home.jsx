/* eslint-disable no-console */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import {
  Text,
} from '@chakra-ui/react'
import { getAllSliders } from '../services/slidersService'
import Slider from '../components/home/Slider'
import { getOrganizationById } from '../services/organizationsService'

const Home = () => {
  const [sliderData, setSliderData] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [organizationData, setOrganizationData] = useState({})

  const loadSliders = async () => {
   const sliders = await getAllSliders()
   setSliderData(sliders.data.result.sliders)
  }
  const loadOrganization = async () => {
   const data = await getOrganizationById(1)
   console.table(data.data.result.publicData);
   setOrganizationData(data.data.result.publicData)
  }

  useEffect(() => {
    loadSliders();
    loadOrganization()
  }, [])

  return (
    <>
      <Slider sliderData={sliderData} />
      <Text textAlign="center" fontSize="3xl" my={5}>{organizationData?.welcomeText}</Text>
      <Text textAlign="center" fontSize="2xl" mb={2}>Últimas novedades</Text>
      <Text textAlign="center" fontSize="2xl">Testimonios</Text>
    </>
)
}

export default Home

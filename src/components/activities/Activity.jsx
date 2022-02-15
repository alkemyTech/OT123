/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react'
import {
  Center, Box, Heading, Text, Image, Icon,
} from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import { getActivityById } from '../../services/activitiesService';

const Activity = () => {
  const [activityData, setActivityData] = useState([]);

  const { id } = useParams()

  const navigate = useNavigate()

  const getActivity = useCallback(async () => {
    const res = await getActivityById(id)
    setActivityData(res.data.result)
  }, [id, setActivityData])

  useEffect(() => {
    getActivity()
  }, [getActivity]);

  return (
    <Center my={6}>
      <Box w={{ base: '90%', md: '60%', xl: '40%' }}>
        <Icon
          as={FiArrowLeft}
          w={8}
          h={8}
          mb={4}
          cursor="pointer"
          onClick={() => {
            navigate('/actividades')
          }}
        />
        <Heading as="h1" size="2xl" textAlign="justify">{activityData.name}</Heading>
        <Image src={activityData.image} my={6} w="100%" h="400px" objectFit="cover" borderRadius="lg" boxShadow="lg" />
        <Text fontSize="xl" textAlign="justify">{activityData.content}</Text>
      </Box>
    </Center>
  )
}

export default Activity

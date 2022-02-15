/* eslint-disable no-console */
import React, { useEffect, useState, useCallback } from 'react'
import { Text, VStack, Grid } from '@chakra-ui/react'
import Card from './Card'
import { getAllActivities } from '../../services/activitiesService'

const Activities = () => {
  const [activitiesData, setActivitiesData] = useState([]);

  const getActivities = useCallback(async () => {
    const res = await getAllActivities()
    setActivitiesData(res.data.result.activities)
  }, [setActivitiesData])

  useEffect(() => {
    getActivities()
  }, [getActivities]);

  return (
    <>
      <VStack my={12} display="flex" textAlign="center">
        <Text fontSize="5xl">Novedades</Text>
        <Text fontSize="2xl" w={{ base: '80%', lg: '50%' }}>
          Enterate de las últimas novedades relacionadas con Somos Más.
        </Text>
      </VStack>
      <Grid templateColumns="repeat(auto-fill, 350px)" gap={8} mb={12} justifyContent="center">
        <Card
          activities={activitiesData}
        />
      </Grid>
    </>
  )
}

export default Activities

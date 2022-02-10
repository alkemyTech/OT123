import React, { useEffect, useState, useCallback } from 'react'
import {
  Center, Box, Heading, Text, Image,
} from '@chakra-ui/react'
import { getNewById } from '../../services/newsService'

const Entry = () => {
  const [entryData, setEntryData] = useState([]);

  const getEntry = useCallback(async () => {
    const res = await getNewById(1)
    setEntryData(res.data.result)
  }, [setEntryData])

  useEffect(() => {
    getEntry()
  }, [getEntry]);

  return (
    <Center my={6}>
      <Box w={{ base: '95%', md: '70%' }}>
        <Heading as="h1" size="2xl" textAlign="justify">{entryData.name}</Heading>
        <Image src={entryData.image} my={6} w="100%" h="400px" objectFit="cover" borderRadius="lg" boxShadow="lg" />
        <Text fontSize="xl" textAlign="justify">{entryData.content}</Text>
      </Box>
    </Center>
  )
}

export default Entry

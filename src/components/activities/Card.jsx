/* eslint-disable react/prop-types */
import React from 'react'
import { GridItem, Text, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Card = ({ activities }) => {
  const navigate = useNavigate()

  return (
    <>
      {activities.map((item) => (
        <GridItem
          key={item.id}
          w="350px"
          borderRadius="lg"
          boxShadow="lg"
          borderWidth="1px"
          cursor="pointer"
          textAlign="justify"
          onClick={() => {
            navigate(`/actividades/${item.id}`)
          }}
        >
          <Text fontSize="2xl" px={6} pt={3} pb={3} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{item.name}</Text>
          <Image src={item.image} />
        </GridItem>
      ))}
    </>
  )
}

export default Card

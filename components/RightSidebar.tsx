'use client';
import { Flex, Show } from "@chakra-ui/react"

function RightSidebar() {
  return (
    <Show above="lg">
      <Flex 
          data-testid='right-sidebar' 
          borderLeft='2px solid #F1F1F2' 
          w='425px' 
          h='100%' 
          direction='column'
          backgroundColor='#FAFAFB'>

      </Flex>
    </Show>
  )
}

export default RightSidebar
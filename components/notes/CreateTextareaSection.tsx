"use client";
import React from 'react'
import ResizableTextarea from '../forms/ResizableTextarea'
import { Flex } from '@chakra-ui/react'
import { CreateTextareaSectionProps } from '@/interfaces/UiProps'

function CreateTextareaSection({ inputValue, onBlur, onChange, sm}: CreateTextareaSectionProps) {
  return (
    <Flex
      paddingInline={sm ? "20px" : "32px"}
      w="100%"
      as="section"
      paddingTop="16px"
      paddingBottom={sm ? '74px': "16px"}
      direction={"column"}
      grow={1}
    >
      <ResizableTextarea
        value={inputValue}
        onBlur={(e) => onBlur(e, "body")}
        onChange={(e) => onChange(e.target.value)}
      />
    </Flex>
  )
}

export default CreateTextareaSection
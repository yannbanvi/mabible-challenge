"use client";
import React from 'react'
import ResizableTextarea from '../forms/ResizableTextarea'
import { Flex } from '@chakra-ui/react'
import { CreateTextareaSectionProps } from '@/interfaces/UiProps'

{/** 
* @component CreateTextareaSection
  @Description A component for adding or editing a note body.
  @param {string} inputValue - The current note body.
  @param {function} onChange - A callback function to handle changes in the note body.
  @param {boolean} sm - A boolean indicating if the component should be displayed in small mode.
  @returns {JSX.Element} - The CreateTextareaSection component.
*/}
function CreateTextareaSection({ inputValue, onChange, sm}: CreateTextareaSectionProps) {
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
        onChange={onChange}
      />
    </Flex>
  )
}

export default CreateTextareaSection
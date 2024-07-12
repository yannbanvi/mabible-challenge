"use client";
import { Textarea, TextareaProps } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";

import React, { forwardRef } from "react";

const ResizableTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <Textarea
        minH="unset"
        w="100%"
        resize="none"
        ref={ref}
        as={TextareaAutosize}
        padding={0}
        maxRows={40}
        minRows={1}
        placeholder="Commencer par entrer ce que le Seigneur vous inspire ici..."
        border="none"
        fontSize={"14px"}
        fontWeight={400}
        lineHeight={"20px"}
        _focus={{ border: "none" }}
        _focusVisible={{ border: "none" }}
        sx={
            { 
           '::-webkit-scrollbar':{
                  display:'none'
              }
           }
         }
        {...props}
      />
    );
  }
);

export default ResizableTextarea;

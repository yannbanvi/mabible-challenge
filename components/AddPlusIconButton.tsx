"use client";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AddPlusIconButton() {
  const [isSmall] = useMediaQuery("(max-width: 30em)");
  return (
    <IconButton
      isRound={true}
      as={Link}
      href={"/notes/create"}
      height={isSmall ? "34px" : "52px"}
      width={isSmall ? "34px" : "52px"}
      boxShadow={!isSmall ? "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" : ""}
      border={isSmall ? "none" : "1px solid #ECECEE"}
      aria-label="Add Note"
      backgroundColor={isSmall ? "#E7E7EA" : "#fff"}
      variant={"solid"}
      icon={
        isSmall ? (
          <Text
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={"26px"}
          >
            +
          </Text>
        ) : (
          <AddIcon />
        )
      }
    />
  );
}

export default AddPlusIconButton;

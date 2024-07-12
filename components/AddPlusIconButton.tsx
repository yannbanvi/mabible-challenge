"use client";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function AddPlusIconButton() {
  return (
    <IconButton
      isRound={true}
      as={Link}
      href={'/notes/create'}
      h="52px"
      w="52px"
      boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.10)"
      border="1px solid #ECECEE"
      aria-label="Add Note"
      backgroundColor={"#fff"}
      variant={"solid"}
      icon={<AddIcon />}
    />
  );
}

export default AddPlusIconButton;

'use client';
import AddNoteBackButton from "@/components/AddNoteBackButton";
import ResizableTextarea from "@/components/forms/ResizableTextarea";
import { DotsIcon } from "@/components/icons";
import {
  Flex,
  Input,
  Text,
  IconButton,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React from "react";

function CreateNote() {
  const undoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.861289 6.29359C0.861289 5.83291 1.23474 5.45945 1.69543 5.45945H12.884C15.708 5.45945 18 7.75142 18 10.5755C18 13.3995 15.708 15.6915 12.884 15.6915C12.4233 15.6915 12.0498 15.3181 12.0498 14.8574C12.0498 14.3967 12.4233 14.0233 12.884 14.0233C14.7867 14.0233 16.3317 12.4782 16.3317 10.5755C16.3317 8.67278 14.7867 7.12772 12.884 7.12772H1.69543C1.23474 7.12772 0.861289 6.75427 0.861289 6.29359Z"
        fill="#A1A1AA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.60421 2.55012C4.93332 2.87248 4.9388 3.4006 4.61644 3.72971L2.0062 6.39462L4.61189 9.01396C4.93679 9.34056 4.93541 9.8687 4.60882 10.1936C4.28222 10.5185 3.75407 10.5171 3.42917 10.1905L0.242775 6.98744C-0.0791472 6.66383 -0.0811716 6.14157 0.238232 5.81548L3.42463 2.56235C3.74699 2.23324 4.2751 2.22776 4.60421 2.55012Z"
        fill="#A1A1AA"
      />
    </svg>
  );

  const undoForwardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1387 6.29359C17.1387 5.83291 16.7653 5.45945 16.3046 5.45945H5.11603C2.29197 5.45945 0 7.75142 0 10.5755C0 13.3995 2.29196 15.6915 5.11603 15.6915C5.57671 15.6915 5.95017 15.3181 5.95017 14.8574C5.95017 14.3967 5.57671 14.0233 5.11603 14.0233C3.21333 14.0233 1.66827 12.4782 1.66827 10.5755C1.66827 8.67278 3.21333 7.12772 5.11603 7.12772H16.3046C16.7653 7.12772 17.1387 6.75427 17.1387 6.29359Z"
        fill="#7F7B83"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3958 2.55012C13.0667 2.87248 13.0612 3.4006 13.3836 3.72971L15.9938 6.39462L13.3881 9.01396C13.0632 9.34056 13.0646 9.8687 13.3912 10.1936C13.7178 10.5185 14.2459 10.5171 14.5708 10.1905L17.7572 6.98744C18.0791 6.66383 18.0812 6.14157 17.7618 5.81548L14.5754 2.56235C14.253 2.23324 13.7249 2.22776 13.3958 2.55012Z"
        fill="#7F7B83"
      />
    </svg>
  );

  const noteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <rect x="1" y="1" width="16" height="16" rx="4" fill="#49FF66" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.51327 1.62994C3.43383 1.62994 1.74811 3.31567 1.74811 5.39511V12.6049C1.74811 14.6843 3.43383 16.3701 5.51327 16.3701H12.484C14.5634 16.3701 16.2492 14.6843 16.2492 12.6049V5.39511C16.2492 3.31567 14.5634 1.62994 12.484 1.62994H5.51327ZM0.118164 5.39511C0.118164 2.41547 2.53364 0 5.51327 0H12.484C15.4636 0 17.8791 2.41547 17.8791 5.39511V12.6049C17.8791 15.5845 15.4636 18 12.484 18H5.51327C2.53364 18 0.118164 15.5845 0.118164 12.6049V5.39511Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.08941 4.96199C3.08941 4.51189 3.45429 4.14702 3.90438 4.14702H13.5917C14.0418 4.14702 14.4066 4.51189 14.4066 4.96199C14.4066 5.41208 14.0418 5.77696 13.5917 5.77696H3.90438C3.45429 5.77696 3.08941 5.41208 3.08941 4.96199Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.08941 8.71849C3.08941 8.2684 3.45429 7.90352 3.90438 7.90352H13.5917C14.0418 7.90352 14.4066 8.2684 14.4066 8.71849C14.4066 9.16859 14.0418 9.53347 13.5917 9.53347H3.90438C3.45429 9.53347 3.08941 9.16859 3.08941 8.71849Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.08941 12.4792C3.08941 12.0292 3.45429 11.6643 3.90438 11.6643H8.74532C9.19541 11.6643 9.56029 12.0292 9.56029 12.4792C9.56029 12.9293 9.19541 13.2942 8.74532 13.2942H3.90438C3.45429 13.2942 3.08941 12.9293 3.08941 12.4792Z"
        fill="#211B28"
      />
    </svg>
  );

  const headerSection = (
    <Flex grow={1} gap="8px" direction="row" align="center">
      <AddNoteBackButton />
      {noteIcon}
      <Flex width={"100%"}>
        <Input
          fontWeight={800}
          paddingInline={"0px"}
          autoFocus
          fontSize="18px"
          lineHeight="22px"
          placeholder="Entrer le titre de votre note ici..."
          _placeholder={{ fontWeight: "normal" }}
          border="none"
          _focus={{ border: "none" }}
          _focusVisible={{ border: "none" }}
        />
      </Flex>
      <IconButton
        backgroundColor={"transparent"}
        border={"none"}
        aria-label="Search database"
        icon={<DotsIcon />}
      />
    </Flex>
  );

  return (
    <Flex
      direction={"column"}
      w="100%"
      style={{ position: "relative" }}
      data-testid="notes-page"
    >
      <Flex
        direction="row"
        justify="space-between"
        paddingInline="32px"
        borderBottom="1px solid #ECECEE"
        margin={0}
        w="100%"
        paddingBlock="12px"
      >
        {headerSection}
      </Flex>
      <Flex
        paddingInline="32px"
        paddingBlock="16px"
        direction={"column"}
        grow={1}
      >
        <ResizableTextarea />
      </Flex>
      <Flex
        height={"58px"}
        paddingInline="32px"
        paddingBlock="12px"
        direction={"row"}
        align={"center"}
        as={Box}
        borderTop={"1px solid #ECECEE"}
      >
        <Flex align={"center"} gap={"2px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M11.668 5.17768C11.668 4.53736 12.1897 4.01562 12.83 4.01562C13.4703 4.01562 13.9921 4.53736 13.9921 5.17768C13.9921 5.81799 13.4703 6.33973 12.83 6.33973C12.1897 6.33973 11.668 5.81799 11.668 5.17768Z"
              fill="#211B28"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6779 1.77866C10.4465 1.77866 10.2158 1.8739 10.0498 2.03992L2.14703 9.94269L8.05731 15.853L15.9601 7.9502C16.1272 7.78306 16.2213 7.5579 16.2213 7.32214V2.66798C16.2213 2.17496 15.825 1.77866 15.332 1.77866H10.6779ZM8.7921 0.78222C9.29011 0.284209 9.97251 0 10.6779 0H15.332C16.8074 0 18 1.19263 18 2.66798V7.32214C18 8.03499 17.7147 8.71101 17.2178 9.2079L8.68616 17.7395C8.33886 18.0868 7.77577 18.0868 7.42846 17.7395L0.260478 10.5715C0.0936969 10.4048 0 10.1786 0 9.94269C0 9.70683 0.0936968 9.48062 0.260478 9.31384L8.7921 0.78222Z"
              fill="#211B28"
            />
          </svg>
          <Text fontWeight={700} lineHeight={"17px"} fontSize={"14px"}>
            1
          </Text>
        </Flex>
        <Spacer />
        <Flex align={"center"}>
          <IconButton
            backgroundColor={"transparent"}
            border={"none"}
            aria-label="Undo"
            icon={undoIcon}
          />
          <IconButton
            backgroundColor={"transparent"}
            border={"none"}
            aria-label="Undo forward"
            icon={undoForwardIcon}
          />
        </Flex>
        <Spacer />
        <Button colorScheme="purple" borderRadius={"10px"}>
          OK
        </Button>
      </Flex>
    </Flex>
  );
}

export default CreateNote;

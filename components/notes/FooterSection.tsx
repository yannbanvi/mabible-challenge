"use client";

import {
  Flex,
  Box,
  Spacer,
  IconButton,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import UndoForwardIcon from "../icons/UndoForwardIcon";
import UndoIcon from "../icons/UndoIcon";
import { FooterSectionProps } from "@/interfaces/UiProps";
import ReactTimeAgo from "react-time-ago";

{/** 
* @component FooterSection
  @Description A component for displaying the note footer.
  @param {NoteInterface} note - The note being edited or created.
  @param {boolean} isPending - A boolean indicating if the note is being saved.
  @param {function} addNote - A callback function to add a new note.
  @param {boolean} sm - A boolean indicating if the component should be displayed in small mode.
  @returns {JSX.Element} - The FooterSection component.
*/}
function FooterSection({ note, isPending, addNote, sm }: FooterSectionProps) {
  const content = (
    <Flex
      height={"58px"}
      width={"100%"}
      style={{ paddingInline: sm ? "20px" : "32px" }}
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
          icon={<UndoIcon />}
        />
        <IconButton
          backgroundColor={"transparent"}
          border={"none"}
          aria-label="Undo forward"
          icon={<UndoForwardIcon />}
        />
      </Flex>
      <Spacer />
      {/** when note is not present we are on create mode so we render save button */}
      {!note && (
        <Button
          onClick={addNote}
          size={sm ? "sm" : "md"}
          colorScheme="purple"
          borderRadius={"10px"}
          isLoading={isPending}
          loadingText="Enregistrement en cours..."
        >
          Enregistrer
        </Button>
      )}
      {/** when note is present we are on edit mode so we render autosave status text */}
      {note && (
        <Flex align={"center"}>
          {/** While pending it shows a loading spinner along with the loading text */}
          {isPending && (
            <Flex align={"center"}>
              <Spinner size="sm" color={"#770FFF"} />
              <Text
                fontSize={"14px"}
                fontWeight={500}
                lineHeight={"17px"}
                color={"#727280"}
                marginLeft="4px"
              >
                Enregistrement en cours...
              </Text>
            </Flex>
          )}
          {/** While no more pending it shows a text with the last modified time */}
          {!isPending && (
            <Text
              fontSize={"14px"}
              fontWeight={500}
              lineHeight={"17px"}
              color={"#727280"}
              suppressHydrationWarning
            >
              Modifié: <ReactTimeAgo date={note?.updatedAt} locale="fr-FR"/>
            </Text>
          )}
        </Flex>
      )}
    </Flex>
  );

  if (sm) {
    return (
      <Flex
        as="footer"
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        backgroundColor="rgba(255, 
            255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
        w="100%"
        direction="row"
        justify="space-between"
        paddingInline={{
          sm: "6px",
          md: "32px",
          lg: "32px",
          xl: "32px",
          "2xl": "32px",
        }}
      >
        {content}
      </Flex>
    );
  }
  return content;
}

export default FooterSection;

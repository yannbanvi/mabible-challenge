"use client";

import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { DotsIcon, SupprimerIcon } from "../icons";
import { NoteItemProps } from "@/interfaces/UiProps";
import { useSearchParams } from "next/navigation";
import ReactTimeAgo from "react-time-ago";

/**
 * @component NoteItem
 * @description A component that renders a single note item with title, body, date, and actions.
 * @param {NoteInterface} note - The note object to be displayed.
 * @param {(id: string) => void} props.onDeleteNote - A callback function to handle note deletion.
 * @returns {JSX.Element} - The JSX element for the NoteItem component.
 */
function NoteItem({ note, onDeleteNote }: NoteItemProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";
  const regex = new RegExp(query, "ig");
  const [isSmall] = useMediaQuery("(max-width: 30em)");
  const [title, setTitle] = useState<any>(null);
  const [body, setBody] = useState<any>(null);
  const maxTitleLength = 100;
  const maxBodyLength = 150;

  /**
   * This method is used to hightlight the search query keywords in the title and body.
   */
  const stylingSearchQueryString = useCallback(() => {

    let title = note?.title;
    let body = note?.body;

    // I don't sanitize the body string here as it's already sanitized when fetched from the server
    if (query !== '' && title?.toLowerCase().includes(query?.toLowerCase())) {
      title = title?.replaceAll(
        regex,
        `<span style="color: #770FFF">${query}</span>`
      );
    } else {
      title = title?.length > maxTitleLength ?  title?.slice(0, maxTitleLength - 3) + '...' : title
    }
    setTitle(title);

    // I don't sanitize the body string here as it's already sanitized when fetched from the server
    if (query !== '' && body?.toLowerCase().includes(query?.toLowerCase())) {
      body = body?.replaceAll(
        regex,
        `<span style="color: #770FFF; font-weight: 700;">${query}</span>`
      );
    } else {
      body = body?.length > maxBodyLength ?  body?.slice(0, maxBodyLength - 3) + '...' : body
    }
    console.log('body: ', body)
    setBody(body);
  }, [query, note?.title, note?.body]);

  {
    /**
     * Every time the search values changes we run the styling for matched keywords in both the title and the body.
     */
  }
  useLayoutEffect(() => {
    console.log("stylingSearchQueryString");
    stylingSearchQueryString();
  }, [stylingSearchQueryString]);

  return (
    <Flex
      role="group"
      paddingInline={{
        base: "20px",
        sm: "20px",
        md: "32px",
        lg: "32px",
        xl: "32px",
        "2xl": "32px",
      }}
      paddingBlock="16px"
      _hover={{ backgroundColor: "#F5F5F7" }}
      borderBottom="1px solid #ECECEE"
      direction="column"
      gap="4px"
    >
      <Flex direction="row" align="center" justify="space-between">
        <Flex
          align="center"
          paddingBlock="8.5px"
          paddingRight={isSmall ? "16px" : "0px"}
          gap="8px"
        >
          {/**
           * This renders the title of the note along with the highlighted keywords in it .
           */}
          <Text
            fontWeight={700}
            lineHeight="17px"
            fontSize="14px"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </Flex>
        <Flex direction="row" align="center" gap="4px">
          {/**
           * This shows the date of creation of the note.
           */}
          <Text
            fontWeight={500}
            lineHeight="15px"
            fontSize="12px"
            color="#727280"
          >
            <ReactTimeAgo date={note?.createdAt} locale="fr-FR" />
          </Text>
          {/**
           * This shows only on hover, and allows user to delete the note.
           */}
          <Box w="34px" h="34px">
            <Menu placement="bottom-end">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                paddingInline="13px"
                paddingBlock="7px"
                borderRadius="34px"
                backgroundColor={isSmall ? "transparent" : "#E7E7EA"}
                visibility={isSmall ? "visible" : "hidden"}
                _groupHover={{ visibility: "visible" }}
                _active={{ backgroundColor: "#E7E7EA" }}
                _hover={{ backgroundColor: "#E7E7EA" }}
                icon={<DotsIcon />}
              />
              <MenuList
                overflow="hidden"
                boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.25)"
                borderRadius="18px"
              >
                <MenuItem
                  _hover={{ backgroundColor: "transparent" }}
                  _focus={{ backgroundColor: "transparent" }}
                  icon={<SupprimerIcon />}
                  onClick={() => onDeleteNote(note?.$id as string)}
                >
                  Supprimer
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      {/**
       * This renders the link to navigate to the note edit page.
       */}
      <Flex
        as={Link}
        href={`/notes/${note?.$id}`}
        _hover={{ textDecoration: "none" }}
      >
        {/**
         * This renders the body of the note along with the highlighted keywords in it .
         */}
        <Text
          fontWeight={400}
          lineHeight="20px"
          fontSize="14px"
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </Flex>
    </Flex>
  );
}

export default NoteItem;

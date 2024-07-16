'use client';

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

function NoteItem({ note, onDeleteNote }: NoteItemProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";
  const regex = new RegExp(query, 'ig');
  const [isSmall] = useMediaQuery('(max-width: 30em)')
  const [title, setTitle] = useState<any>(null);
  const [body, setBody] = useState<any>(null);

  const stylingSearchQueryString = useCallback(() => {
    let title = note?.title;
    let body = note?.body;
    if (title?.toLowerCase().includes(query?.toLowerCase())) {
      title = title?.replaceAll(regex, `<span style="color: #770FFF">${query}</span>`) 
    } 
    setTitle(title);

    if (body?.toLowerCase().includes(query?.toLowerCase())) {
      body = body?.replaceAll(regex, `<span style="color: #770FFF; font-weight: 700;">${query}</span>`, );
    } 
    setBody(body);
  }, [query, note?.title, note?.body]);

  useLayoutEffect(() => {
    stylingSearchQueryString();
  }, [stylingSearchQueryString]);

  
  return (
    <Flex
      role="group"
      paddingInline={{ base: '20px', sm: '20px', md: '32px', lg: '32px', xl: '32px', '2xl': '32px',  }}
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
          paddingRight={isSmall ? '16px' : '0px'}
          gap="8px">
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
          <Text
            fontWeight={500}
            lineHeight="15px"
            fontSize="12px"
            color="#727280"
          >
            { note?.createdAt.toLocaleDateString() }
          </Text>
          <Box w="34px" h="34px">
            <Menu placement="bottom-end">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                paddingInline="13px"
                paddingBlock="7px"
                borderRadius="34px"
                backgroundColor={isSmall ? 'transparent': '#E7E7EA'}
                visibility={isSmall? 'visible' : "hidden"}
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
      <Flex as={Link} href={`/notes/${note?.$id}`} _hover={{ textDecoration: 'none' }}>
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

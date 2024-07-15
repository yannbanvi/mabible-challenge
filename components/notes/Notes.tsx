'use client';

import { searchNotes } from "@/actions/notesActions";
import { useNotes } from "@/context/noteContext";
import { Flex, Box, InputGroup, InputLeftElement, Input, Stack, Text } from "@chakra-ui/react";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition, useCallback, useLayoutEffect } from "react";
import AddPlusIconButton from "../AddPlusIconButton";
import { NoteIcon, RechercheIcon } from "../icons";
import NoNotesPlaceholder from "../NoNotesPlaceholder";
import NotesList from "./NotesList";

export default function Notes() {
  
    const { updateNotes, notes, shouldRefreshNotes } = useNotes();
    const searchParams = useSearchParams();
    const query = searchParams.get("search") || "";
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const [ isPending, startTransition ] = useTransition();
    let searchTimeout: string | number | NodeJS.Timeout | undefined;
    
  
    const addQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
   
        return params.toString()
      },
      [searchParams]
    )
  
    const fetchSearchQuery = async (searchQuery: string) => {
      try {
        startTransition( async () => {
          const responseData = await searchNotes(searchQuery);
          updateNotes(responseData);
        });
        
      } catch (error) {
        console.error(error);
      }
    }
  
    const searchInNotes = (event: React.FocusEvent<HTMLInputElement>) => {
      const searchQuery = event.target.value;
      if (searchQuery.trim() !== '' && searchQuery.trim().length < 3) return;
      // Update notes with filtered results
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const params = addQueryString("search", searchQuery);
        replace(`${pathname}?${params.toString()}`);
        fetchSearchQuery(searchQuery);
      }, 500);
    };
  
    useLayoutEffect(() => {
      fetchSearchQuery(query ?? '');
    }, [shouldRefreshNotes]);
  
    const pageTitle = (
      <Flex gap="8px" direction="row" align="center">
        <NoteIcon isActive />
        <Text fontWeight={800} fontSize="18px" lineHeight="22px">
          Notes
        </Text>
      </Flex>
    );
  
    const searchBox = (
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <RechercheIcon />
          </InputLeftElement>
          <Input
            backgroundColor="#F1F1F2"
            borderColor="#F1F1F2"
            borderRadius="8px"
            paddingLeft="32px"
            width="150px"
            height="34px"
            fontSize="14px"
            fontWeight="500"
            lineHeight="17px"
            color="#211B28"
            defaultValue={searchParams.get('search')?.toString()}
            _placeholder={{ color: "#727280" }}
            type="search"
            _focus={{ borderColor: "#770FFF", width: "250px" }}
            placeholder="Rechercher"
            onChange={searchInNotes}
          />
        </InputGroup>
      </Box>
    );
  
    return (
      <Stack w="100%" spacing={0} style={{ position: 'relative' }} data-testid="notes-page">
        <Flex
          direction="row"
          justify="space-between"
          paddingInline="32px"
          borderBottom="1px solid #ECECEE"
          margin={0}
          w="100%"
          paddingBlock="12px"
        >
          {pageTitle}
          {searchBox}
        </Flex>
        { notes?.length === 0 ? <NoNotesPlaceholder /> : <NotesList notes={notes} /> }
        <span
          style={{
            zIndex: 99999,
            position: "absolute",
            bottom: "44px",
            right: "32px",
          }}
        >
          <AddPlusIconButton />
        </span>
      </Stack>
    );
  }
'use client';

import { fetchNotes } from "@/actions/notesActions";
import AddPlusIconButton from "@/components/AddPlusIconButton";
import {
  NoteIcon,
  RechercheIcon,
} from "@/components/icons";
import NoNotesPlaceholder from "@/components/NoNotesPlaceholder";
import Notes from "@/components/notes/Notes";
import { useNotes } from "@/context/noteContext";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
export default function NotesPage() {

  const { updateNotes, notes, shouldRefreshNotes } = useNotes();
  
  const fetchData = async () => {
    try {
      const responseData = await fetchNotes();
      updateNotes(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
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
          _placeholder={{ color: "#727280" }}
          type="search"
          _focus={{ borderColor: "#770FFF", width: "250px" }}
          placeholder="Rechercher"
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
      { notes?.length === 0 ? <NoNotesPlaceholder /> : <Notes notes={notes} /> }
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

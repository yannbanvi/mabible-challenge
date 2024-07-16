"use client";

import { searchNotes } from "@/actions/notesActions";
import { useNotes } from "@/context/noteContext";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Text,
  IconButton,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition, useCallback, useLayoutEffect, useState } from "react";
import AddPlusIconButton from "../AddPlusIconButton";
import { NoteIcon, RechercheIcon } from "../icons";
import NoNotesPlaceholder from "../NoNotesPlaceholder";
import NotesList from "./NotesList";

/**
 * The Notes component is responsible for displaying the list of notes.
 * It handles the search functionality, displaying the search input based on the screen size,
 * and fetching the updated notes when the search query changes or when the `shouldRefreshNotes` flag is true.
 * @component {Notes}
 * @returns - The JSX component for the Notes page.
 */
export default function Notes() {
  const { updateNotes, notes, shouldRefreshNotes } = useNotes();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";
  const pathname = usePathname();
  const [isSmall] = useMediaQuery('(max-width: 30em)')
  const { replace } = useRouter();

  const [isPending, startTransition] = useTransition();
  let searchTimeout: string | number | NodeJS.Timeout | undefined;
  // This method is used to add a query string to the current URL.
  const addQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  // This method is used to the notes from the search query.
  const fetchSearchQuery = useCallback(async () => {
    try {
      startTransition(async () => {
        const responseData = await searchNotes(query);
        updateNotes(responseData);
      });
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  // This method is used to handle the search input on focus and blur events.
  const searchInNotes = (event: React.FocusEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    if (searchQuery.trim() !== "" && searchQuery.trim().length < 3) return;
    // Update notes with filtered results
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const params = addQueryString("search", searchQuery);
      fetchSearchQuery();
      replace(`${pathname}?${params.toString()}`);
    }, 500);
  };
  // Every time the search query changes, we fetch the updated notes.
  useLayoutEffect(() => {
    fetchSearchQuery();
  }, [shouldRefreshNotes, fetchSearchQuery]);


  const searchIconForMobile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clip-path="url(#clip0_689_2453)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.89184 1.64986C4.44449 1.64986 1.64986 4.44449 1.64986 7.89184C1.64986 11.3392 4.44449 14.1338 7.89184 14.1338C11.3392 14.1338 14.1338 11.3392 14.1338 7.89184C14.1338 4.44449 11.3392 1.64986 7.89184 1.64986ZM0 7.89184C0 3.5333 3.53329 0 7.89184 0C12.2504 0 15.7837 3.5333 15.7837 7.89184C15.7837 9.77398 15.1248 11.5022 14.0251 12.8585L17.7584 16.5918C18.0805 16.9139 18.0805 17.4362 17.7584 17.7584C17.4362 18.0805 16.9139 18.0805 16.5918 17.7584L12.8585 14.0251C11.5022 15.1248 9.77397 15.7837 7.89184 15.7837C3.53329 15.7837 0 12.2504 0 7.89184Z"
          fill="#211B28"
        />
      </g>
      <defs>
        <clipPath id="clip0_689_2453">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  
  const searchBox = (
    <Flex grow={(isSmall && showSearchInput) ? 1: 0}>
      {(isSmall && !showSearchInput) && (
        <IconButton
          icon={searchIconForMobile}
          backgroundColor={"transparent"}
          aria-label={"bouton de recherche"}
          onClick={() => setShowSearchInput(!showSearchInput)}
        />
      )}
      {(isSmall && showSearchInput) && (
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <RechercheIcon />
          </InputLeftElement>
          <Input
            backgroundColor="#F1F1F2"
            borderColor="#770FFF"
            borderRadius="8px"
            paddingLeft="32px"
            width="100%"
            height="34px"
            fontSize="14px"
            fontWeight="500"
            lineHeight="17px"
            color="#211B28"
            onBlur={() => setShowSearchInput(false)}
            defaultValue={searchParams.get("search")?.toString()}
            _placeholder={{ color: "#727280" }}
            type="search"
            autoFocus
            _focus={{ borderColor: "#770FFF", width: "100%" }}
            placeholder="Rechercher"
            onChange={searchInNotes}
          />
        </InputGroup>
      )}
      {!isSmall && (
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
            defaultValue={searchParams.get("search")?.toString()}
            _placeholder={{ color: "#727280" }}
            type="search"
            _focus={{ borderColor: "#770FFF", width: "250px" }}
            placeholder="Rechercher"
            onChange={searchInNotes}
          />
        </InputGroup>
      )}
    </Flex>
  );

  return (
    <Stack
      w="100%"
      spacing={0}
      style={{ position: "relative" }}
      data-testid="notes-page"
    >
      <Flex
        direction="row"
        justify="space-between"
        paddingInline={{
          base: "20px",
          sm: "20px",
          md: "32px",
          lg: "32px",
          xl: "32px",
          "2xl": "32px",
        }}
        borderBottom="1px solid #ECECEE"
        margin={0}
        w="100%"
        paddingBlock="12px"
      >
        {!showSearchInput && <Flex gap="8px" direction="row" align="center">
          <NoteIcon isActive />
          <Text fontWeight={800} fontSize="18px" lineHeight="22px">
            Notes
          </Text>
        </Flex>}
        <Flex gap={"4px"} grow={(isSmall && showSearchInput) ? 1 : 0}>
          {searchBox}
          {(isSmall) && <AddPlusIconButton />}
        </Flex>
      </Flex>
      {isPending ? (
        <Box paddingTop={'40px'}>
          "Pending..."
        </Box>
      ) : notes?.length === 0 ? (
        <NoNotesPlaceholder />
      ) : (
        <NotesList notes={notes} />
      )}
      {!isSmall && (
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
      )}
    </Stack>
  );
}

'use client';

import { fetchNotes, searchNotes } from "@/actions/notesActions";
import AddPlusIconButton from "@/components/AddPlusIconButton";
import {
  NoteIcon,
  RechercheIcon,
} from "@/components/icons";
import NoNotesPlaceholder from "@/components/NoNotesPlaceholder";
import Notes from "@/components/notes/Notes";
import NotesList from "@/components/notes/NotesList";
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useLayoutEffect, useTransition } from "react";

function NotesFallback() {
  return <>placeholder</>
}

export default function NotesPage() {

  return (
    <Notes />
  )
}

import { NoteInterface, NotesProps } from "@/interfaces/UiProps";
import { Stack } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem";

function Notes({ notes }: NotesProps) {
  return (
    <Stack
      spacing={0}
      overflow={"scroll"}
      className="notes-container"
    >
      {notes?.map((note: NoteInterface) => (
        <NoteItem key={note?.$id} note={note} />
      ))}
      ;
    </Stack>
  );
}

export default Notes;

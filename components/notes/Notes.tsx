"use client";

import { NoteInterface, NotesProps } from "@/interfaces/UiProps";
import { Stack, useToast } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem";
import { deleteNote } from "@/actions/notesActions";
import { useNotes } from "@/context/noteContext";

function Notes({ notes }: NotesProps) {
  const toast = useToast();
  const { updateShouldRefreshNotes } = useNotes();

  const onDeleteNoteClick = async (id: string) => {
    if (!id) return;
    try {
      await deleteNote(id);
      updateShouldRefreshNotes(true);
      toast({
        title: "Note supprimée avec succès.",
        status: "success",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Oups.",
        description:
          "Nous rencontrons une erreur lors de la suppression de la note. Veuillez réessayer plus tard.",
        status: "warning",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  return (
    <Stack spacing={0} overflow={"scroll"} className="notes-container">
      {notes?.map((note: NoteInterface) => (
        <NoteItem
          key={note?.$id}
          note={note}
          onDeleteNote={onDeleteNoteClick}
        />
      ))}
      ;
    </Stack>
  );
}

export default Notes;

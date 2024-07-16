"use client";

import { NoteInterface, NotesProps } from "@/interfaces/UiProps";
import { Stack, useToast } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem";
import { deleteNote } from "@/actions/notesActions";
import { useNotes } from "@/context/noteContext";

/**
 * @component {NotesList} represents a list of notes
 * @param {NoteInterface[]} notes - An array of NoteInterface objects representing the notes.
 * @returns {JSX.Element} - The NotesList component.
 */
function NotesList({ notes }: NotesProps) {
  const toast = useToast();
  const { updateShouldRefreshNotes } = useNotes();

  /**
   * Handles the deletion of a note.
   *
   * @param id - The ID of the note to be deleted.
   *
   * @returns - Nothing.
   */
  const onDeleteNoteClick = async (id: string) => {
    // Ensure the ID is provided before attempting to delete the note.
    if (!id) return;
    try {
      await deleteNote(id);
      updateShouldRefreshNotes(true);
      // display a success message to the user.
      toast({
        title: "Note supprimée avec succès.",
        status: "success",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
    } catch (error) {
      // display an error message to the user.
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

export default NotesList;

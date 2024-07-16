"use client";

import { createNote, updateNote } from "@/actions/notesActions";
import AddNoteBackButton from "@/components/AddNoteBackButton";
import { DotsIcon } from "@/components/icons";
import NoteTitleIcon from "@/components/icons/NoteTitleIcon";
import { CreateOrEditNoteProps, NoteInterface } from "@/interfaces/UiProps";
import useAutoSaveDebounce from "@/hooks/useAutoSaveDebounce";
import isEmpty from "@/utils/isEmpty";
import { Flex, Input, IconButton, useToast, Show } from "@chakra-ui/react";
import React, { useEffect, useState, useTransition } from "react";
import FooterSection from "./FooterSection";
import CreateTextareaSection from "./CreateTextareaSection";

const DEBOUNCE_WAIT_DELAY = 800;

{/** 
* @component CreateOrEditNote
  @description A component for creating or editing a note.
  @param {NoteInterface} note (optional) - The note to be edited. 
*/}
function CreateOrEditNote({ note }: CreateOrEditNoteProps) {
  const [newlyCreatedNote, setNewlyCreatedNote] =
    useState<NoteInterface | null>(note as NoteInterface);
  const [titleInputValue, setTitleInputValue] = useState(note?.title);
  const [bodyInputValue, setBodyInputValue] = useState(note?.body);

  const debounceAutoSave = useAutoSaveDebounce(
    {
      ...(note as NoteInterface),
      title: titleInputValue as string,
      body: bodyInputValue as string,
    },
    DEBOUNCE_WAIT_DELAY
  );

  let [isPending, startTransition] = useTransition();
  const toast = useToast();

  const addNote = async () => {
    // If the title or body are empty, display a warning message and stop the execution.
    if (
      isEmpty(titleInputValue as string) ||
      isEmpty(bodyInputValue as string)
    ) {
      // Display a warning message and stop the execution.
      toast({
        title: "La note ne peut pas être ajoutée.",
        description:
          "Le titre ou le corps de la note ne peuvent pas être vides.",
        status: "warning",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    const createdAt = new Date();
    const note: NoteInterface = {
      title: titleInputValue as string,
      body: bodyInputValue as string,
      createdAt: createdAt,
      updatedAt: createdAt,
    };
    try {
      // Here we create the note and update the newlyCreatedNote state with the returned note.
      startTransition(async () => {
        const createdNote = await createNote(note);
        setNewlyCreatedNote(createdNote);
      });
    } catch (error) {
      // Display a warning message.
      toast({
        title: "Oups.",
        description:
          "Nous rencontrons une erreur lors de l'ajout de la note. Veuillez réessayer plus tard.",
        status: "warning",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  /**
   * This function save the changes on the note automatically.
   * It uses the useAutoSaveDebounce hook to debounce the save operation.
   */
  const autoSaveNote = () => {
    // If the note title or body have not been changed, do nothing.
    if (titleInputValue === note?.title && bodyInputValue === note?.body)
      return;

    // If the title or body are empty, display a warning message and stop the execution.
    if( titleInputValue === "" || bodyInputValue === "") {
      toast({
        title: "Oups.",
        description:
          "Veuillez remplir le titre et le corps de la note pour les sauvegarder",
        status: "warning",
        duration: 9000,
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    try {
      startTransition(async () => {
        let updatedNote = await updateNote(
          newlyCreatedNote?.$id ?? "",
          debounceAutoSave
        );
        setNewlyCreatedNote(updatedNote);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const headerSection = (
    <Flex grow={1} gap="8px" direction="row" align="center">
      <AddNoteBackButton />
      <NoteTitleIcon />
      <Flex width={"100%"}>
        <Input
          fontWeight={800}
          paddingInline={"0px"}
          autoFocus={
            newlyCreatedNote === null || newlyCreatedNote === undefined
          }
          fontSize="18px"
          lineHeight="22px"
          placeholder="Entrer le titre de votre note ici..."
          _placeholder={{ fontWeight: "normal" }}
          border="none"
          _focus={{ border: "none" }}
          _focusVisible={{ border: "none" }}
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value as string)}
        />
      </Flex>
      <IconButton
        backgroundColor={"transparent"}
        border={"none"}
        aria-label="Search database"
        icon={<DotsIcon />}
      />
    </Flex>
  );

  /**
   * When the note is updated, we call the autoSaveNote function to save the changes.
   */
  useEffect(() => {
    autoSaveNote();
  }, [debounceAutoSave]);

  return (
    <>
      {/** BLOCK only for mobile breakpoint */}
      <Show below="sm">
        {/**
         * BLOCK for the Header section
         * BLOCk where the title input is displayed.
         */}
        <Flex
          as="header"
          position="fixed"
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
          borderBottom="1px solid #ECECEE"
          margin={0}
          paddingBlock="12px"
        >
          {headerSection}
        </Flex>

        {/**
         * BLOCK for the Content section
         * BLOCk where the textarea of the note body is display.
         */}
        <Flex width={"100%"} marginTop={"65px"}>
          <CreateTextareaSection
            sm
            inputValue={bodyInputValue as string}
            onChange={(e) => setBodyInputValue(e.target.value as string)}
          />
        </Flex>
        {/**
         * BLOCK for the Footer section
         * BLOCk where date changes text and save note button are displayed .
         */}
        <FooterSection
          note={newlyCreatedNote as NoteInterface}
          addNote={addNote}
          isPending={isPending}
          sm
        />
      </Show>

      {/** BLOCK only for tablet, laptop and above */}
      <Show above="md">
        <Flex
          direction={"column"}
          w="100%"
          style={{ position: "relative", height: "100vh" }}
          data-testid="notes-page"
        >
          {/**
           * BLOCK for the Header section
           * BLOCk where the title input is displayed.
           */}
          <Flex
            direction="row"
            justify="space-between"
            paddingInline={{
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
            {headerSection}
          </Flex>
          <CreateTextareaSection
            inputValue={bodyInputValue as string}
            onChange={(e) => setBodyInputValue(e.target.value as string)}
          />
          {/**
           * BLOCK for the Footer section
           * BLOCk where date changes text and save note button are displayed .
           */}
          <FooterSection
            note={newlyCreatedNote as NoteInterface}
            addNote={addNote}
            isPending={isPending}
          />
        </Flex>
      </Show>
    </>
  );
}

export default CreateOrEditNote;

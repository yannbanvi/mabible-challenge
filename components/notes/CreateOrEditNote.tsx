"use client";

import { createNote, updateNote } from "@/actions/notesActions";
import AddNoteBackButton from "@/components/AddNoteBackButton";
import { DotsIcon } from "@/components/icons";
import NoteTitleIcon from "@/components/icons/NoteTitleIcon";
import { CreateOrEditNoteProps, NoteInterface } from "@/interfaces/UiProps";
import isEmpty from "@/utils/isEmpty";
import {
  Flex,
  Input,
  IconButton,
  useToast,
  Show,
} from "@chakra-ui/react";
import React, { useState, useTransition } from "react";
import FooterSection from "./FooterSection";
import CreateTextareaSection from "./CreateTextareaSection";

function CreateOrEditNote({ note }: CreateOrEditNoteProps) {
  const [newlyCreatedNote, setNewlyCreatedNote] =
    useState<NoteInterface | null>(note as NoteInterface);
  const [titleInputValue, setTitleInputValue] = useState(note?.title);
  const [bodyInputValue, setBodyInputValue] = useState(note?.body);

  let [isPending, startTransition] = useTransition();
  const toast = useToast();

  const addNote = async () => {
    if (
      isEmpty(titleInputValue as string) ||
      isEmpty(bodyInputValue as string)
    ) {
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
      startTransition(async () => {
        const createdNote = await createNote(note);
        setNewlyCreatedNote(createdNote);
      });
    } catch (error) {
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

  const autoSaveNote = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>,
    property: "title" | "body"
  ) => {
    const newValue = e.target.value.trim();
    if (
      newValue.length === 0 ||
      newlyCreatedNote === null ||
      newlyCreatedNote === undefined
    ) {
      return;
    }

    if (
      ["title", "body"].includes(property) &&
      newlyCreatedNote?.[property] !== newValue
    ) {
      // auto-save the changes
      startTransition(async () => {
        await updateNote(newlyCreatedNote?.$id ?? "", {
          ...newlyCreatedNote,
          [property]: newValue,
          updatedAt: new Date(),
        });
      });
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
          onChange={(e) => setTitleInputValue(e.target.value)}
          onBlur={(e) => autoSaveNote(e, "title")}
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

  return (
    <>
      <Show below="sm">
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
        <Flex width={"100%"} marginTop={"65px"}>
          <CreateTextareaSection 
            sm 
            inputValue={bodyInputValue as string}
            onBlur={autoSaveNote}
            onChange={setBodyInputValue}
          />
        </Flex>
        <FooterSection 
            note={newlyCreatedNote as NoteInterface} 
            addNote={addNote} 
            isPending={isPending}
            sm
          />
      </Show>
      <Show above="md">
        <Flex
          direction={"column"}
          w="100%"
          style={{ position: "relative", height: "100vh" }}
          data-testid="notes-page"
        >
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
            onBlur={autoSaveNote}
            onChange={setBodyInputValue}
          />
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

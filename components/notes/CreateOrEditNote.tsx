'use client';

import { createNote, updateNote } from "@/actions/notesActions";
import AddNoteBackButton from "@/components/AddNoteBackButton";
import ResizableTextarea from "@/components/forms/ResizableTextarea";
import { DotsIcon } from "@/components/icons";
import NoteTitleIcon from "@/components/icons/NoteTitleIcon";
import UndoForwardIcon from "@/components/icons/UndoForwardIcon";
import UndoIcon from "@/components/icons/UndoIcon";
import { CreateOrEditNoteProps, NoteInterface } from "@/interfaces/UiProps";
import isEmpty from "@/utils/isEmpty";
import {
  Flex,
  Input,
  Text,
  IconButton,
  Box,
  Spacer,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState, useTransition } from "react";

function CreateOrEditNote({ note }: CreateOrEditNoteProps) {
    const [newlyCreatedNote, setNewlyCreatedNote] =
      useState<NoteInterface | null>(note as NoteInterface);
  const [titleInputValue, setTitleInputValue] = useState(note?.title);
  const [bodyInputValue, setBodyInputValue] = useState(note?.body);

  let [isPending, startTransition] = useTransition();
  const toast = useToast();

  const addNote = async () => {
    if (isEmpty(titleInputValue) || isEmpty(bodyInputValue)) {
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
      title: titleInputValue,
      body: bodyInputValue,
      createdAt: createdAt,
      updatedAt: createdAt,
    };
    try {
      startTransition(async () => {
        const createdNote = await createNote(note);
        setNewlyCreatedNote(createdNote);
        console.log("Note created:", createdNote);
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
        await updateNote(
            newlyCreatedNote?.$id ?? "", 
            {
                ...newlyCreatedNote,
                [property]: newValue,
                updatedAt: new Date(),
            }
        );
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
          autoFocus={newlyCreatedNote === null || newlyCreatedNote === undefined}
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
    <Flex
      direction={"column"}
      w="100%"
      style={{ position: "relative", height: "100vh" }}
      data-testid="notes-page"
    >
      <Flex
        direction="row"
        justify="space-between"
        paddingInline="32px"
        borderBottom="1px solid #ECECEE"
        margin={0}
        w="100%"
        paddingBlock="12px"
      >
        {headerSection}
      </Flex>
      <Flex
        paddingInline="32px"
        paddingBlock="16px"
        direction={"column"}
        grow={1}
      >
        <ResizableTextarea
          value={bodyInputValue}
          onBlur={(e) => autoSaveNote(e, "body")}
          onChange={(e) => setBodyInputValue(e.target.value)}
        />
      </Flex>
      <Flex
        height={"58px"}
        paddingInline="32px"
        paddingBlock="12px"
        direction={"row"}
        align={"center"}
        as={Box}
        borderTop={"1px solid #ECECEE"}
      >
        <Flex align={"center"} gap={"2px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M11.668 5.17768C11.668 4.53736 12.1897 4.01562 12.83 4.01562C13.4703 4.01562 13.9921 4.53736 13.9921 5.17768C13.9921 5.81799 13.4703 6.33973 12.83 6.33973C12.1897 6.33973 11.668 5.81799 11.668 5.17768Z"
              fill="#211B28"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6779 1.77866C10.4465 1.77866 10.2158 1.8739 10.0498 2.03992L2.14703 9.94269L8.05731 15.853L15.9601 7.9502C16.1272 7.78306 16.2213 7.5579 16.2213 7.32214V2.66798C16.2213 2.17496 15.825 1.77866 15.332 1.77866H10.6779ZM8.7921 0.78222C9.29011 0.284209 9.97251 0 10.6779 0H15.332C16.8074 0 18 1.19263 18 2.66798V7.32214C18 8.03499 17.7147 8.71101 17.2178 9.2079L8.68616 17.7395C8.33886 18.0868 7.77577 18.0868 7.42846 17.7395L0.260478 10.5715C0.0936969 10.4048 0 10.1786 0 9.94269C0 9.70683 0.0936968 9.48062 0.260478 9.31384L8.7921 0.78222Z"
              fill="#211B28"
            />
          </svg>
          <Text fontWeight={700} lineHeight={"17px"} fontSize={"14px"}>
            1
          </Text>
        </Flex>
        <Spacer />
        <Flex align={"center"}>
          <IconButton
            backgroundColor={"transparent"}
            border={"none"}
            aria-label="Undo"
            icon={<UndoIcon />}
          />
          <IconButton
            backgroundColor={"transparent"}
            border={"none"}
            aria-label="Undo forward"
            icon={<UndoForwardIcon />}
          />
        </Flex>
        <Spacer />
        {!newlyCreatedNote && (
          <Button
            onClick={addNote}
            colorScheme="purple"
            borderRadius={"10px"}
            isLoading={isPending}
            loadingText="Enregistrement en cours..."
          >
            Enregistrer
          </Button>
        )}
        {newlyCreatedNote && (
          <Flex align={"center"}>
            {isPending && (
              <Flex align={"center"}>
                <Spinner size="sm" color={"#770FFF"} />
                <Text
                  fontSize={"14px"}
                  fontWeight={500}
                  lineHeight={"17px"}
                  color={"#727280"}
                  marginLeft="4px"
                >
                  Enregistrement en cours...
                </Text>
              </Flex>
            )}
            {!isPending && (
              <Text
                fontSize={"14px"}
                fontWeight={500}
                lineHeight={"17px"}
                color={"#727280"}
                suppressHydrationWarning
              >
                Modifié: {newlyCreatedNote?.updatedAt?.toLocaleString()}
              </Text>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default CreateOrEditNote;

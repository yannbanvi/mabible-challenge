"use client";

import { NoteInterface } from "@/interfaces/UiProps";
import { createContext, useContext, useState } from "react";

type NoteContextType = {
  notes: NoteInterface[];
  selectedNote: NoteInterface | null;
  updateNotes: (newNotes: NoteInterface[]) => void;
  selectNote: (note: NoteInterface) => void;
  shouldRefreshNotes: boolean;
  updateShouldRefreshNotes: (val: boolean) => void;
};

const noteContextDefaultValue: NoteContextType = {
  notes: [],
  selectedNote: null,
  shouldRefreshNotes: false,
  updateNotes: () => {},
  selectNote: () => {},
  updateShouldRefreshNotes: (val: boolean) => {},
};

const NoteContext = createContext<NoteContextType>(noteContextDefaultValue);

export const NoteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [shouldRefreshNotes, setShouldRefreshNotes] = useState(false);
  const [selectedNote, setSelectedNote] = useState<NoteInterface | null>(null);

  const updateNotes = (newNotes: NoteInterface[]) => {
    setNotes(newNotes);
    setShouldRefreshNotes(false);
  };

  const selectNote = (note: NoteInterface) => {
    setSelectedNote(note);
  };

  const updateShouldRefreshNotes = (val: boolean) => {
    setShouldRefreshNotes(val);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        selectedNote,
        shouldRefreshNotes,
        updateNotes,
        selectNote,
        updateShouldRefreshNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
export const useNotes = () => useContext(NoteContext);

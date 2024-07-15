import { fetchNote } from "@/actions/notesActions";
import CreateOrEditNote from "@/components/notes/CreateOrEditNote";
import { NoteInterface } from "@/interfaces/UiProps";
import { redirect } from "next/navigation";

export default async function EditNote({ params }: { params: { id: string } }) {
    let note = {};
    try {
    note = await fetchNote(params?.id);
  } catch (error) {
    redirect("/notes");
  }
  return <CreateOrEditNote note={note as NoteInterface} />;
}

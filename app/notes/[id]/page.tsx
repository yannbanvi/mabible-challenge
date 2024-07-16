import { fetchNote } from "@/actions/notesActions";
// import CreateOrEditNote from "@/components/notes/CreateOrEditNote";
import { NoteInterface } from "@/interfaces/UiProps";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const CreateOrEditNote = dynamic(() => import('@/components/notes/CreateOrEditNote'), {
  ssr: false,
})
export default async function EditNote({ params }: { params: { id: string } }) {
    let note = {};
    /**
     * Fetch the note with the given ID
     */
    try {
    note = await fetchNote(params?.id);
    console.log('note:', note);
  } catch (error) {
    /**
     * If the note is not found, redirect to the notes list page
     */
    redirect("/notes");
  }
  return <CreateOrEditNote note={note as NoteInterface} />;
}

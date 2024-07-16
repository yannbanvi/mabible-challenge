import { NoteInterface } from "@/interfaces/UiProps";

// This function will convert server data to client data
export default function convertToNoteClientData(data: any): NoteInterface {
    return {
        $id: data?.$id,
        title: data?.title,
        body: data?.body,
        createdAt: new Date(data?.createdAt),
        updatedAt: new Date(data?.updatedAt),
    }
}
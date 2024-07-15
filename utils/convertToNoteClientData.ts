import { NoteInterface } from "@/interfaces/UiProps";

export default function convertToNoteClientData(data: any): NoteInterface {
    return {
        $id: data?.$id,
        title: data?.title,
        body: data?.body,
        createdAt: new Date(data?.createdAt),
        updatedAt: new Date(data?.updatedAt),
    }
}
'use server';

import { NoteInterface } from "@/interfaces/UiProps";
import client from "@/lib/appwrite_client";
import convertToNoteClientData from "@/utils/convertToNoteClientData";
import { Databases, ID, Query } from "appwrite";
import { revalidatePath } from "next/cache";

const TABLE_NAME = "notes";
const database = new Databases(client);

// Actions pour créer une note
export async function createNote(note: NoteInterface) {
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            TABLE_NAME,
            ID.unique(),
            note,
        );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
    */
    return convertToNoteClientData(response);
    } catch (error) {
        console.error("Error creating note:", error);
        throw new Error("Failed to create note");
    }
};

export async function updateNote(id: string, note: NoteInterface) {
    const editedNote = {
        title: note?.title,
        body: note?.body,
        updatedAt: new Date(),
        createdAt: note?.createdAt,
    };
    try {
        const response = await database.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            TABLE_NAME,
            id,
            editedNote,
        );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
    */
    return convertToNoteClientData(response);
    } catch (error) {
        console.error("Error updating note:", error);
        throw new Error("Failed to update note");
    }
};

export async function deleteNote(id: string) {
    try {
        const response = await database.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            TABLE_NAME,
            id,
        );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
    */
    revalidatePath('/notes');
    } catch (error) {
        console.error("Error updating note:", error);
        throw new Error("Failed to update note");
    }
};

export async function fetchNotes() {
    try {
        const response = await database.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            TABLE_NAME,
            [Query.orderDesc('$createdAt')]
        );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
    */
    return response.documents.map(convertToNoteClientData);
    } catch (error) {
        console.error("Error fetching note:", error);
        throw new Error("Failed to fetch notes");
    }
};
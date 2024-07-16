"use server";

import { NoteInterface } from "@/interfaces/UiProps";
import client from "@/lib/appwrite_client";
import convertToNoteClientData from "@/utils/convertToNoteClientData";
import { Databases, ID, Query } from "appwrite";
import { revalidatePath, revalidateTag } from "next/cache";

const TABLE_NAME = "notes";
const database = new Databases(client);

/**
 * Creates a new note in the database.
 *
 * @param note - The note object to be created.
 * @returns The created note with reduced information for the client.
 * @throws Will throw an error if the note creation fails.
 */
export async function createNote(note: NoteInterface) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      TABLE_NAME,
      ID.unique(),
      note
    );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
     */
    return convertToNoteClientData(response);
  } catch (error) {
    console.error("Error creating note:", error);
    throw new Error("Failed to create note");
  }
}

/**
 * Updates an existing note in the database.
 *
 * @param id - The unique identifier of the note to be updated.
 * @param note - The updated note object. Only the `title`, `body`, `updatedAt`, and `createdAt` fields will be considered.
 * @returns The updated note with reduced information for the client.
 * @throws Will throw an error if the note update fails.
 */
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
      editedNote
    );
    
    // Revalidate the note cache to update the UI
    revalidatePath("/notes/[id]", 'page');

    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
     */
    return convertToNoteClientData(response);
  } catch (error) {
    console.error("Error updating note:", error);
    throw new Error("Failed to update note");
  }
}

/**
 * Deletes a note from the database based on its unique identifier.
 *
 * @param id - The unique identifier of the note to be deleted.
 *
 * @throws Will throw an error if the note deletion fails.
 *
 * @remarks
 * This function deletes a note from the database and revalidates the notes list cache to update the UI.
 */
export async function deleteNote(id: string) {
  try {
    await database.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      TABLE_NAME,
      id
    );
    // Revalidate the notes list cache to update the UI
    revalidatePath("/notes");
  } catch (error) {
    console.error("Error updating note:", error);
    throw new Error("Failed to update note");
  }
}

/**
 * Fetches notes from the database ordered by creation date in descending order.
 *
 * @returns A promise that resolves to an array of notes with reduced information for the client.
 * @throws Will throw an error if the note fetch fails.
 */
export async function fetchNotes() {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      TABLE_NAME,
      [Query.orderDesc("$createdAt")]
    );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
     */
    return response.documents.map(convertToNoteClientData);
  } catch (error) {
    console.error("Error fetching note:", error);
    throw new Error("Failed to fetch notes");
  }
}

/**
 * Fetches notes from the database based on a search query.
 *
 * @param searchQuery - The search query to filter notes by title or body.
 * @returns A promise that resolves to an array of notes with reduced information for the client.
 * @throws Will throw an error if the note fetch fails.
 */
export async function searchNotes(searchQuery: string) {
  try {
    const response = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      TABLE_NAME,
      [
        Query.or([
          Query.contains("title", searchQuery?.toLowerCase()),
          Query.contains("body", searchQuery?.toLowerCase()),
        ]),
        Query.orderDesc("$createdAt"),
      ]
    );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
     */
    return response.documents.map(convertToNoteClientData);
  } catch (error) {
    console.error("Error fetching note:", error);
    throw new Error("Failed to fetch notes");
  }
}

/**
 * Fetches a single note from the database based on its unique identifier.
 *
 * @param id - The unique identifier of the note to be fetched.
 * @returns The fetched note with reduced information for the client.
 * @throws Will throw an error if the note fetch fails.
 */
export async function fetchNote(id: string) {
  try {
    const response = await database.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
      TABLE_NAME,
      id
    );
    /* Cette convertion est utile car elle permet de reduire le nombre d'information renvoyées au client.
     * Nous choisissons de conserver uniquement les champs nécessaires pour les notes et soustraire les informations sensibles.
     */
    return convertToNoteClientData(response);
  } catch (error) {
    console.error("Failed to fetch note with provided ID: " + id, error);
    throw new Error("Failed to fetch note with provided ID: " + id);
  }
}

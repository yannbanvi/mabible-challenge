// This function checks if the note body is empty
export default function isEmpty(val: string): boolean {
    return val?.trim() === '' || val === null || val === undefined;
}
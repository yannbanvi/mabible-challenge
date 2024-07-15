export default function isEmpty(val: string): boolean {
    return val?.trim() === '' || val === null || val === undefined;
}
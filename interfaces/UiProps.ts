
export interface NoteInterface {
    $id?: string;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface NavLinkProps {
    url: string;
    title: string;
    icon: JSX.Element;
    isActive?: boolean;
}

export interface NavigationLinksProps {
    navigationLinks: NavLinkProps[];
    title?: string;
}

export interface IconProps {
    isActive?: boolean;
}

export interface NoteItemProps {
    note: NoteInterface;
    onDeleteNote: (id: string) => void;
}

export interface NotesProps {
    notes: NoteInterface[];
}

export interface CreateOrEditNoteProps {
    note?: NoteInterface;
}


export interface NoteInterface {
    $id?: string;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface NavLinkProps {
    url: string;
    title?: string;
    icon: JSX.Element;
    isActive?: boolean;
    onDrawerClick?: () => void;
}

export interface NavigationLinksProps {
    navigationLinks: NavLinkProps[];
    title?: string;
    inDrawer?: boolean;
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

export interface FooterSectionProps {
    note?: NoteInterface;
    addNote: () => void;
    isPending: boolean;
    sm?: boolean;
}

export interface CreateTextareaSectionProps {
    inputValue: string;
    onChange: (e: string) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, property: 'title' | 'body') => void;
    sm?: boolean;
}

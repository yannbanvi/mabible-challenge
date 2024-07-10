
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
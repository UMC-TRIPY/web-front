interface CommonSummaryListItemProps {
    date: string;
}

export interface CommonHrefProps {
    href: string;
}

export type FolderWithLinkProps = {
    url: string;
    name: string;
};

export type ItemWithoutLinkProps = CommonSummaryListItemProps &
    Record<'folder', string[]>;
export type ItemWithLinkProps = CommonSummaryListItemProps &
    Record<'folder', FolderWithLinkProps[]>;

interface CommonSummaryListItemProps {
    date: string;
}

export interface CommonURLProps {
    url: string;
}

export interface FolderWithLinkProps extends CommonURLProps {
    name: string;
}

export type ItemWithoutLinkProps = CommonSummaryListItemProps &
    Record<'folder', string[]>;
export type ItemWithLinkProps = CommonSummaryListItemProps &
    Record<'folder', FolderWithLinkProps[]>;

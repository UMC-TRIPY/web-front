export interface CommonSummaryParamsProps {
    params: {
        type?: 'link' | 'gallery' | 'file';
        schedule_id?: number;
    };
}

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

export interface SummaryMenuDetailProps {
    name: string;
    href: string;
    isActivated: boolean;
}

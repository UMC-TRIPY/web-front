interface ITab {
    id: number;
    name: string;
    clicked: boolean;
}

interface ITabItemProps {
    tab: ITab;
    handleClickTab: any;
}

const TabItem = (props: ITabItemProps) => {
    const { tab, handleClickTab } = props;
    return (
        <div
            className={
                tab.clicked
                    ? 'text-main-color border-b-2 border-yellow-300 cursor-pointer'
                    : 'text-[#A3A3A3] cursor-pointer'
            }
            onClick={() => handleClickTab(tab.id)}
        >
            {tab.name}
        </div>
    );
};

export default TabItem;

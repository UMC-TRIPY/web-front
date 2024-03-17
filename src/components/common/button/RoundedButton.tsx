interface RoundedButtonProps {
    children: React.ReactNode;
    smallLabel?: boolean;
    onClick: () => void;
}

export default function RoundedButton({
    children,
    smallLabel,
    onClick
}: RoundedButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-lightgrey py-2 px-3 rounded-full hover:bg-main-color text-dark-black ${
                smallLabel && 'text-xs'
            }`}
        >
            {children}
        </button>
    );
}

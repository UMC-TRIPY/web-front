const DropdownList = (props: any) => {
    return (
        <div
            className='transition ease-in-out delay-150 bg-yellow-300 transform -translate-y-1 '
            style={{ position: 'absolute' }}
        >
            {props.visibility && props.children}
        </div>
    );
};

export default DropdownList;

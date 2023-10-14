import React from 'react';

const List = ({className, children }: {children?: React.ReactNode, className?: string} ) => {
    return (
        <li className={`pr-4 font-semibold hover:text-[#00246a] duration-200 ${className}`}>
            {children}
        </li>
    );
};

export default List;
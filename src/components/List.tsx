import React from 'react';

const List = ({ children }: {children: React.ReactNode} ) => {
    return (
        <li className='mr-4 font-semibold hover:text-[#00246a] duration-200'>
            {children}
        </li>
    );
};

export default List;
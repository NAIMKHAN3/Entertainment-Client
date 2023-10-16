import React from 'react';

const TableHeade = ({children}:{children: React.ReactNode}) => {
    return (
        <th  className='p-2 border'>{children}</th>
    );
};

export default TableHeade;
import React from 'react';

const TableBody = ({children}:{children:React.ReactNode}) => {
    return (
        <td className="p-2 border text-center">{children}</td>
    );
};

export default TableBody;
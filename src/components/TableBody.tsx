import React from 'react';

const TableBody = ({children}:{children:React.ReactNode}) => {
    return (
        <td className="p-2 border">{children}</td>
    );
};

export default TableBody;
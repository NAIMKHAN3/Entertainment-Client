import React from 'react';

const TableBody = ({children,className}:{children?:React.ReactNode, className?:string}) => {
    return (
        <td className={`p-2 border text-center ${className}`}>{children}</td>
    );
};

export default TableBody;
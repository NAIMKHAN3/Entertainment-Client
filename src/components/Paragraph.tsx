import React from 'react';
type PropsParagrapsh = {
    children: React.ReactNode,
    className: string,
}

const Paragraph = (props: PropsParagrapsh) => {
    return (
        <p className={`${props.className}`}>
            {props.children}
        </p>
    );
};

export default Paragraph;
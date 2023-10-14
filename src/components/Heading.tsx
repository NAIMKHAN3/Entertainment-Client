import React from 'react';
type PropsHeading = {
    children: React.ReactNode,
    className: string,
}
const Heading = (props: PropsHeading) => {
    return (
        <h1 className={`${props.className}`}>
        {props.children}
    </h1>
    );
};

export default Heading;
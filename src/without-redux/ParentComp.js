import React from 'react';
import A from './A';
import B from './B';
import C from './C';

const ParentComp = () => {
    return (
        <>
            <h2>Parent Component</h2>
            <hr/>
            <A />
            <hr/>
            <B />
            <hr/>
            <C />
        </>
    );
}

export default ParentComp;
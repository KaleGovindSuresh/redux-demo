import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, reset, } from "../app/slices/CounterSlice"


const Y = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <>
            <h3>Y Component - {count}</h3>
            <button onClick={() => dispatch(increment(1))}>++</button>
            <button onClick={() => dispatch(increment(5))}>++ by 5</button>
            <button onClick={() => dispatch(decrement(1))}>--</button>
            <button onClick={() => dispatch(reset())}>Y</button>
        </>
    );
};

export default Y;
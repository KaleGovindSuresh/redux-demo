import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const B = () => {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <>
            <h2>B Component, total visitors - {state.count}</h2>
            <button onClick={() => dispatch({type:"increament"})}>++</button>
            <button onClick={() => dispatch({type:"decreament"})}>--</button>
        </>
    );
}

export default B;
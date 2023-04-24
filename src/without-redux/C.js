import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const C = () => {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <>
            <h2>C Component, total visitors - {state.count}</h2>
            <button onClick={() => dispatch({ type: "increament" })}>++</button>
            <button onClick={() => dispatch({ type: "decreament" })}>--</button>
        </>
    );
}

export default C;
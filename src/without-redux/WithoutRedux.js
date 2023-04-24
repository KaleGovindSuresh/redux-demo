import React, { useReducer } from 'react';
import CounterContext from './CounterContext';
import ParentComp from './ParentComp';

const WithoutRedux = () => {

    // reducer takes current state and action to calculate new state 
    //reducer perform immutablechanges(array,object)
    // const [state, dispatch] = useReducer(first, second, third) 
    
    const initialState = {count:0}
    const reducer = (state = initialState, action ) => {
        switch (action.type) {
            case "increament":
          return {count: state.count+1};
            case "decreament":
          return {count: state.count-1};
            case "reset":
          return initialState;
        }
    };
    const [state, dispatch] = useReducer(reducer,initialState) 

    return (
        <>
            <h2>Without Redux</h2>
            <CounterContext.Provider value={{state, dispatch}}>
                <ParentComp />
            </CounterContext.Provider>
        </>
    );
}

export default WithoutRedux;


// Action:- 
//   An action is an object having 'type' and optionaly 'payload' properties 
  
// EX  :-  const increamentAction = {type:"increament"}
  

// Redux: -
// Redux is a predictable state container for Javascript application
// package.json
// npm init -y
//npm i redux
const { createStore } = require("redux");
const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { count: state.count + action.payload };
    }
    case "counter/decrement": {
      return { count: state.count - action.payload };
    }
    case "counte/reset": {
      return initialState;
    }
  }
};
const store = createStore(reducer);
//action creator
const increment = (value = 1) => ({
  type: "counter/increment",
  payload: value,
});
//action creator
const decrement = (value = 1) => ({
  type: "counter/decrement",
  payload: value,
});

// selector
//it is used to access the part of redux state
const selectCount = (state) => state?.count;
//whenever there are changes in the state, the callback passed to the subscribe method will get executed
store.subscribe(() => {
  console.log(selectCount(store.getState()));
});
console.log(store.getState());
store.dispatch(increment(2));
console.log(store.getState());
console.log(store.getState(10));
console.log(store.getState());
store.dispatch(decrement(5));
console.log(store.getState());
console.log(store.getState().count);
console.log(selectCount(store.getState()));
store.dispatch({ type: "counter/reset" });
console.log(selectCount(store.getState()));

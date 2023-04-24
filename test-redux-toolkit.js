//npm i @reduxjs/toolkit
const { configureStore, createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    //actionName:reducer
    increment: (state, action) => {
      // immutable updates requires return statement
      return { ...state, count: state.count + action.payload };
    },
    decrement: (state, { payload }) => {
      // return{...state,count: state.count - action.payload}
      // mutable updates requires return statement
      //immer library handles the mutable updates
      state.count = state.count + payload;
    },
    reset: () => ({ count: 0 }),
  },
});

const counterReducer = counterSlice.reducer;

//setup the store
const store = configureStore({
  counter: counterReducer,
});

const { decrement, increment, reset } = counterSlice.actions;
const selectCount = (state) => state?.counter.count;

store.subscribe(() => {
  console.log(selectCount(store.getState()));
});

store.dispatch(increment(5));
store.dispatch(increment(5));
store.dispatch(increment(5));
console.log(selectCount(store.getState()));

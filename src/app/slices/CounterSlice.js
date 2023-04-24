import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state, action) => ({ count: state.count + action.payload }),
        decrement: (state, action) => ({ count: state.count - action.payload }),
        reset: (state, action) => ({ count: 0 }),
    },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const selectCount = (state) => state?.counter?.count;

export default counterSlice.reducer; 
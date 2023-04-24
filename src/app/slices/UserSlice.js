import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers: (state, action) => {
            return [...state, ...action.payload];
        },
        updateUser: (state, action) => {
            const arr = [...state];
            const { id, data } = action.payload;
            const index = arr.findIndex((u) => u.id == id);
            const user = { ...arr[index], ...data };
            arr.splice(index, 1, user);
            return arr;
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return state.filter((u) => u.id != id);
        },
    },
});
export const { addUsers, updateUser, deleteUser } = UserSlice.actions;
export const selectUsers = (state) => state?.users;
export default UserSlice.reducer; 
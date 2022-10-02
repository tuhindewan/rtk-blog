import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: "Saiduzzaman Tuhin"},
    {id: '1', name: "Dewan Tuhin"},
    {id: '2', name: "Tuhin Dewan"}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer
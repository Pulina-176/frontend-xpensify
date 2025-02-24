import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    userName: "",
    balance: 100.0
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {}
})

export const {} = dashboardSlice.actions

export default dashboardSlice.reducer;
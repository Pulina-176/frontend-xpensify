import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    balance: ""
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getBalanceStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getBalanceSuccess: (state, action) => {
            state.balance = action.payload;
            state.loading = false;
            state.error = false;
        },
        getBalanceFailure: (state) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {getBalanceFailure, getBalanceStart, getBalanceSuccess} = dashboardSlice.actions

export default dashboardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentList: [],
    loading: false,
    error: false,
};

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        fetchTransactionStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchTransactionSuccess: (state, action) => {
            state.currentList = action.payload;
            state.loading = false;
            state.error = false;
        },
        fetchTransactionFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { fetchTransactionFailure, fetchTransactionStart, fetchTransactionSuccess } = transactionSlice.actions;

export default transactionSlice.reducer;
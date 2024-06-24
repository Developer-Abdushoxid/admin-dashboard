import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: '63701d74f03239bef000014e',
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : "light";
        },
    },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
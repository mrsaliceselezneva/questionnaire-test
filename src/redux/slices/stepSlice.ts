import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowStep: "",
};

const stepSlice = createSlice({
    name: "stepSlice",
    initialState,
    reducers: {
        setCreateStep(state, action) {
            state.nowStep = action.payload;
        },
    },
});

export const { setCreateStep } = stepSlice.actions;

export default stepSlice.reducer;

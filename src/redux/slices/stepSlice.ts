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
        setDeleteStep(state) {
            state.nowStep = "";
        },
    },
});

export const { setCreateStep, setDeleteStep } = stepSlice.actions;

export default stepSlice.reducer;

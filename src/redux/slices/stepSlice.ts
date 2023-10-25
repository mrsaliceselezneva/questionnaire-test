import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface typeState {
    nowStep: string;
}

const initialState: typeState = {
    nowStep: "",
};

const stepSlice = createSlice({
    name: "stepSlice",
    initialState,
    reducers: {
        setCreateStep(state, action: PayloadAction<string>) {
            state.nowStep = action.payload;
        },
    },
});

export const { setCreateStep } = stepSlice.actions;

export default stepSlice.reducer;

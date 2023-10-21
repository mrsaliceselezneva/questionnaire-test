import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowStep: {
        title: "",
        link: "",
    },
};

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        setCreateProfile(state, action) {
            state.nowStep = action.payload;
        },
        setDeleteProfile(state) {
            state.nowStep = { title: "", link: "" };
        },
    },
});

export const { setCreateProfile, setDeleteProfile } = profileSlice.actions;

export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: { email: "", picture: "" },
};

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        setCreateProfile(state, action) {
            state.profile = action.payload;
        },
        setDeleteProfile(state) {
            state.profile = { email: "", picture: "" };
        },
    },
});

export const { setCreateProfile, setDeleteProfile } = profileSlice.actions;

export default profileSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type typeProfile = { email: string; picture: string };

interface typeState {
    profile: typeProfile;
}

const initialState: typeState = {
    profile: { email: "", picture: "" },
};

const profileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        setCreateProfile(state, action: PayloadAction<typeProfile>) {
            state.profile = action.payload;
        },
        setDeleteProfile(state) {
            state.profile = { email: "", picture: "" };
        },
    },
});

export const { setCreateProfile, setDeleteProfile } = profileSlice.actions;

export default profileSlice.reducer;

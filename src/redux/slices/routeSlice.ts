import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    route: ["Главная"],
    mapRoute: {
        main: "главная",
        personal: "ФИО",
        photo: "фото",
        skills: "навыки",
        about: "о себе",
    },
};

const routeSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setRoute(state, action) {
            state.route.push(action.payload);
        },
        setClearRoute(state) {
            state.route = ["Главная"];
        },
    },
});

export const { setRoute, setClearRoute } = routeSlice.actions;

export default routeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: "theme",
    initialState: {
        darkModeOff: true,
    },
    reducers: {
        toggleTheme: state => {
            state.darkModeOff = !state.darkModeOff;
        },
    },
});

export const { toggleTheme } = themeSwitchSlice.actions;
export const selectThemeState = state => state.theme;
export const selectIsDarkTheme = state => selectThemeState(state).darkModeOff;

export default themeSwitchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: "theme",
    initialState: {
        darkModeOff: false,
    },
    reducers: {
        toggleTheme: state => {
            state.darkModeOff = !state.darkModeOff;
        },
    },
});

export const { toggleTheme } = themeSwitchSlice.actions;
const selectThemeState = state => state.themeSwitch;
export const selectIsDarkTheme = state => selectThemeState(state).darkModeOff;

export default themeSwitchSlice.reducer;
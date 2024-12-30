import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name : "theme",
    initialState : "primary",
    reducers : {
        toggleTheme : (state) => state == "primary" ? "dark" : "primary",
    }
});

export const { toggleTheme } = themeSlice.actions ;

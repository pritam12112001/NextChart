import { createSelector, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light',
    },
    reducers: {
        setTheme: (state, action) => {
            return { ...state, value: action.payload };
        },
    },
});

export const { setTheme } = themeSlice.actions;


export const selectTheme = createSelector(
    state => state.theme,
    theme => theme.value
);

export default themeSlice.reducer;
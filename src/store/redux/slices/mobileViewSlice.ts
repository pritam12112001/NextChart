import { createSelector, createSlice } from '@reduxjs/toolkit';

const mobileViewSlice = createSlice({
    name: 'mobileView',
    initialState: {
        value: true, 
    },
    reducers: {
        setMobileView: (state, action) => {
            return { ...state, value: action.payload };
        },
    },
});

export const { setMobileView } = mobileViewSlice.actions;


export const selectMobileView = createSelector(
    state => state.mobileView,
    mobileView => mobileView.value
);

export default mobileViewSlice.reducer;
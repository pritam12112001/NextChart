import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentSoftwareId: null,
    baseSoftwareId: null,
    subscribedSoftwares: [],
    accessibleSoftwares: [],
}

const softwareSlice = createSlice({
    name: 'software',
    initialState: initialState,
    reducers: {
        setCurrentSoftwareId: (state, action) => {
            return { ...state, currentSoftwareId: action.payload };
        },
        setBaseSoftwareId: (state, action) => {
            return { ...state, baseSoftwareId: action.payload };
        },
        setSubscribedSoftwares: (state, action) => {
            return { ...state, subscribedSoftwares: action.payload };
        },
        setAccessibleSoftwares: (state, action) => {
            return { ...state, accessibleSoftwares: action.payload };
        },
    },
});

export const { setCurrentSoftwareId, setBaseSoftwareId, setSubscribedSoftwares, setAccessibleSoftwares } = softwareSlice.actions;


export const selectBaseSoftwareId = createSelector(
    state => state.software,
    software => software.setBaseSoftwareId
)

export const selectCurrentSoftwareId = createSelector(
    state => state.software,
    software => software.currentSoftwareId
)
export const selectSubscribedSoftwares = createSelector(
    state => state.software,
    software => software.subscribedSoftwares
)
export const selectAccessibleSoftwares = createSelector(
    state => state.software,
    software => software.accessibleSoftwares
)


export default softwareSlice.reducer;
import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialGlobalState = {
    globalTicket: null,
    temporaryTicket: null,
    globalAccountId: null,
    currentSoftwareId: null,
    profile: {},
}

const globalsSlice = createSlice({
    name: 'globals',
    initialState: initialGlobalState,
    reducers: {
        setGlobalTicket: (state, action) => {
            //delete localStorage.ticket
            return { ...state, globalTicket: action.payload };
        },
        setTemporaryTicket: (state, action) => {
            return { ...state, temporaryTicket: action.payload };
        },
        setGlobalAccountId: (state, action) => {
            return { ...state, globalAccountId: action.payload };
        },
        setCurrentSoftwareId: (state, action) => {
            return { ...state, currentSoftwareId: action.payload };
        },
        setProfile: (state, action) => {
            return { ...state, profile: { ...state.profile, ...action.payload } };
        },
        logoutSuccessful: (_state) => {
            //delete localStorage.ticket
            return { ...initialGlobalState };
        }
    },
});

export const { setGlobalTicket, setGlobalAccountId, setProfile, setCurrentSoftwareId, logoutSuccessful, setTemporaryTicket } = globalsSlice.actions;


export const selectGlobalTicket = createSelector(
    state => state.globals,
    globals => globals.globalTicket
);
export const selectGlobalAccountId = createSelector(
    state => state.globals,
    globals => globals.globalAccountId
)

export const selectCurrentSoftwareId = createSelector(
    state => state.globals,
    globals => globals.currentSoftwareId
)
export const selectProfile = createSelector(
    state => state.globals,
    globals => globals.profile
)
export const selectTemporaryTicket = createSelector(
    state => state.globals,
    globals => globals.temporaryTicket
);


export default globalsSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: 'TESTNAME'
        },
        error: ''
    },
    reducers: {
        authorize: (state, action) => void (state.user = action.payload),
        error: (state, action) => void (state.error = action.payload)
    }
});

const { actions, reducer } = authSlice;
export const { authorize, error } = actions;
export default reducer;

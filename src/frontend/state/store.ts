import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth';

export const store = configureStore({
    reducer: {
        auth: AuthReducer
    }
});

export type IRootState = ReturnType<typeof store.getState>;
// store.dispatch(setLoading('this is payload ' + Math.random()));

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    email: string | null;
    password: string | null;
}

const initialState: LoginState = {
    email: null,
    password: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        clearCredentials: (state) => {
            state.email = null;
            state.password = null;
        },
    },
});

export const { setCredentials, clearCredentials } = loginSlice.actions;

export default loginSlice.reducer;

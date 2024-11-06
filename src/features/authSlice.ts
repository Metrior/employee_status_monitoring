import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: { id: number; name: string } | null;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState;
        },
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

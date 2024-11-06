import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers, updateUser, User,} from '../api/usersApi';

interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface UpdateData {
    status: string
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const res = await fetchUsers();
    return res.data;
});

export const updateUserById = createAsyncThunk(
    'users/updateUser',
    async ({ id, data }: { id: string; data: UpdateData }) => {
        const res = await updateUser(id, data);
        return { id, data: res.data };
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}, // No synchronous reducers are needed here
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load users';
            })
            .addCase(updateUserById.fulfilled, (state, action) => {
                const { id, data } = action.payload;
                const index = state.users.findIndex((user) => user.id === id);
                if (index !== -1) {
                    state.users[index] = { ...state.users[index], ...data };
                }
            });
    },
});

export default usersSlice.reducer;

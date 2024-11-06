import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers, updateUser, createUser, User, Status} from '../api/usersApi';

interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface UpdateData {
    status: Status
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
};

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const res = await fetchUsers();
        return res.data;
    }
);

export const updateUserById = createAsyncThunk(
    'users/updateUser',
    async ({ id, data }: { id: string; data: UpdateData }) => {
        const res = await updateUser(id, data);
        return { data: res.data };
    }
);

export const createRandomUser = createAsyncThunk(
    'users/addUser',
    async () => {
        const res = await createUser();
        return res.data;
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
                state.error = null;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load users';
            })
            .addCase(updateUserById.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.users = data;
            })
            .addCase(createRandomUser.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.users = state.users.concat(data);
            })
            .addCase(createRandomUser.rejected, () => {
                console.error('Error')
            });
    },
});

export default usersSlice.reducer;

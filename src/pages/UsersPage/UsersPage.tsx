import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, Container } from '@mui/material';

import {AppDispatch, RootState} from '../../store';
import { getUsers } from '../../features/usersSlice';

import Search from '../../components/Search';

import { User } from '../../api/usersApi';
import UsersList from "../../components/UsersList";

interface Filter {
    query: string,
    type: keyof User,
}

const UsersPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { users, status } = useSelector((state: RootState) => state.users);
    const [filter, setFilter] = useState<Filter>({query: '', type: 'name'});

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleSearch = useCallback((query: string, type: keyof User) => {
        setFilter({query, type});
    }, []);

    const filteredUsers = useMemo(()=>{
        return users.filter((user) => user?.[filter.type].toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter, users])

    return (
        <Container
            sx={{
                m: '40px auto'
            }}
        >
            <Search onSearch={handleSearch} />

            {status === 'loading' ? (
                <CircularProgress sx={{m:'20px 50%'}}/>
            ) : (
                <UsersList users={filteredUsers} />
            )}
        </Container>
    );
};

export default UsersPage;

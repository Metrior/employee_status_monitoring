import React, {memo, useCallback} from 'react';
import { useDispatch } from 'react-redux';

import {Card, CardContent, Typography, Select, MenuItem, SelectChangeEvent, Avatar, Box} from '@mui/material';

import {UpdateData, updateUserById} from '../../features/usersSlice';
import {User} from '../../api/usersApi';

import {AppDispatch} from "../../store";

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = memo(({ user }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleSelectChange = useCallback((e: SelectChangeEvent) => {
        const status: string = e.target.value;
        dispatch(updateUserById({
            id: user.id,
            data: { status } as UpdateData
        }));
    }, [dispatch, user.id]);

    return (
        <Card
            variant="outlined"
            sx={{
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: (theme) => `0 4px 10px ${theme.palette.primary.main}50`,
                },
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    gap: '10px',
                }}
            >
                <Avatar
                    alt={user.name}
                    src={user.image}
                    sx={{ width: 160, height: 160 }}
                />

                <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    <Select
                        value={user.status}
                        onChange={handleSelectChange}
                        variant="standard"
                        sx={{
                            width: 130,
                        }}
                    >
                        <MenuItem value="Working">Working</MenuItem>
                        <MenuItem value="On Vacation">On Vacation</MenuItem>
                        <MenuItem value="Lunch Time">Lunch Time</MenuItem>
                        <MenuItem value="Business Trip">Business Trip</MenuItem>
                    </Select>
                </Box>
            </CardContent>
        </Card>
    );
});

export default UserCard;

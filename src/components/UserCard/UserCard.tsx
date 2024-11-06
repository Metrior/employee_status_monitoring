import React, {memo, useCallback} from 'react';
import { useDispatch } from 'react-redux';

import {
    Card,
    CardContent,
    Typography,
    Select,
    MenuItem,
    SelectChangeEvent,
    Avatar,
    Box,
    ListItemIcon
} from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import { red, blue, green, yellow } from '@mui/material/colors';

import LazyRenderer from "../LazyRenderer";

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
        <LazyRenderer>
            <Card
                variant="outlined"
                sx={{
                    contentVisibility: 'auto',
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
                        sx={{ width: 140, height: 140 }}
                    />

                    <Box>
                        <Typography variant="h6">{user.name}</Typography>
                        <Select
                            value={user.status}
                            onChange={handleSelectChange}
                            variant="standard"
                            sx={{
                                width: 150,
                                '& .MuiSelect-select': {
                                    display: 'flex',
                                    flexDirection: 'row',
                                },
                                '& .MuiListItemIcon-root': {
                                    minWidth: 28,
                                    alignItems: 'center',
                                }
                            }}
                        >
                            <MenuItem
                                value="Working"
                            >
                                <ListItemIcon>
                                    <TripOriginIcon sx={{ height:12, color: red[500]}} />
                                </ListItemIcon>

                                <Typography>
                                    Working
                                </Typography>
                            </MenuItem>
                            <MenuItem value="On Vacation">
                                <ListItemIcon>
                                    <TripOriginIcon sx={{ height:12, color: blue[500]}} />
                                </ListItemIcon>

                                <Typography>
                                    On Vacation
                                </Typography>
                            </MenuItem>
                            <MenuItem value="Lunch Time">
                                <ListItemIcon>
                                    <TripOriginIcon sx={{ height:12, color: green[500]}} />
                                </ListItemIcon>

                                <Typography>
                                    Lunch Time
                                </Typography>
                            </MenuItem>
                            <MenuItem value="Business Trip">
                                <ListItemIcon>
                                    <TripOriginIcon sx={{ height:12, color: yellow[500]}} />
                                </ListItemIcon>

                                <Typography>
                                    Business Trip
                                </Typography>
                            </MenuItem>
                        </Select>
                    </Box>
                </CardContent>
            </Card>
        </LazyRenderer>
    );
});

export default UserCard;

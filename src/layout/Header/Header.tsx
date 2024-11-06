import React from 'react';
import {useDispatch} from "react-redux";

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

import {logout} from "../../features/authSlice.ts";

const Header: React.FC = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                boxShadow: 'none'
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        flexGrow: 1,
                        fontWeight: 'bold'
                    }}
                >
                    Employees
                </Typography>
                <Box>
                    <Button
                        color="primary"
                        variant="outlined"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 'bold'
                        }}
                        onClick={handleLogout}
                    >
                        Log Out
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

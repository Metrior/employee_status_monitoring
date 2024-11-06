import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
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
                    >
                        Log Out
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

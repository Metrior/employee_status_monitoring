import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

import {
    Box,
    Button,
    Divider,
    FormControl,
    InputAdornment,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import {User} from "../../api/usersApi.ts";
import {createRandomUser} from "../../features/usersSlice.ts";

import {AppDispatch} from "../../store";

interface SearchProps {
    onSearch: (query: string, type: keyof User) => void;
}

type Filter = 'status' | 'name'

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<Filter>('name');

    const dispatch = useDispatch<AppDispatch>();

    //API didn't specify what should be done, so just added such query
    const handleCreate = useCallback(()=>{
        dispatch(createRandomUser())
    }, [dispatch])

    const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        onSearch(e.target.value, filter);
    }, [filter, onSearch]);

    const handleFilterChange = useCallback((e: SelectChangeEvent) => {
        setFilter(e.target.value as Filter);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '50px',
            gap: '10px'
        }}>
            <Button
                variant="contained"
                endIcon={<AddIcon />}
                sx={{ height: '100%' }}
                onClick={handleCreate}
            >
                Create
            </Button>

            <TextField
                label="Type to search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
                sx={{
                    backgroundColor: 'white',
                    '& .MuiInputBase-root': {
                        height: '50px',
                    },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px 14px',
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Divider orientation="vertical" flexItem sx={{ marginRight: 1 }} />

                            <FormControl variant="outlined" sx={{ backgroundColor: 'white', height: '100%' }}>
                                <Select
                                    value={filter}
                                    onChange={handleFilterChange}
                                    label="Filter"
                                    sx={{
                                        width: 150,
                                        backgroundColor: 'white',
                                        border: 'none',
                                        '& fieldset': { border: 'none' },
                                    }}
                                >
                                    <MenuItem value="name">Filter by name</MenuItem>
                                    <MenuItem value="status">Filter by status</MenuItem>
                                </Select>
                            </FormControl>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default Search;

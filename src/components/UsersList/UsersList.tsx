import React from 'react';

import Grid from "@mui/material/Grid";

import UserCard from "../UserCard";

import {User} from "../../api/usersApi.ts";

interface UsersListProps {
    users: User[]; // Define users prop type as an array of User
}

const UsersList: React.FC<UsersListProps> = ({users}) => {
    return (
        <Grid container spacing={6}>
            {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    );
};

export default UsersList;

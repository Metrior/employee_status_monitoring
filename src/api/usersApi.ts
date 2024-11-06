import axiosClient from './axiosClient';

export type Status = 'Working' | 'On Vacation' | 'Lunch Time' | 'Business Trip';

export interface User {
    id: string,
    image: string,
    name: string,
    status: Status
}

export const fetchUsers = () => axiosClient.get('/users');
export const updateUser = (id: string, data: {status: Status}) => axiosClient.post(`/users/${id}`, data);
export const createUser = () => axiosClient.post(`/user`);

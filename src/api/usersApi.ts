import axiosClient from './axiosClient';

// export type Status = 'Working' | 'OnVacation' | 'LunchTime' | 'BusinessTrip';

export interface User {
    id: string,
    image: string,
    name: string,
    status: string
}

export const fetchUsers = () => axiosClient.get('/users');
export const updateUser = (id: string, data: {status: string}) => axiosClient.post(`/users/${id}`, data);

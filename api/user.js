import axios from 'axios'

export const getUsers = () => {
    return axios.get(`https://api.github.com/users`);
};

export const getUser = (user) => {
    return axios.get(`https://api.github.com/users/${user}`);
};
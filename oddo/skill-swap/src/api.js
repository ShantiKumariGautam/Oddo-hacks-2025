import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export const registerUser = (formData) => API.post('/auth/register', formData);
export const loginUser = (formData) => API.post('/auth/login', formData);
export const getUsers = () => API.get('/users');
export const getUserById = (id) => API.get(`/users/${id}`);

export default API;

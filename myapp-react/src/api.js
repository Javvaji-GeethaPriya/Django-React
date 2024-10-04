// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Update this to your Django server URL

export const getEmployees = () => axios.get(`${API_URL}/employees/`);
export const getDepartments = () => axios.get(`${API_URL}/departments/`);
export const createEmployee = (data) => axios.post(`${API_URL}/employees/`, data);
export const createDepartment = (data) => axios.post(`${API_URL}/departments/`, data);
export const updateEmployee = (id, data) => axios.put(`${API_URL}/employees/${id}/`, data);
export const updateDepartment = (id, data) => axios.put(`${API_URL}/departments/${id}/`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}/`);
export const deleteDepartment = (id) => axios.delete(`${API_URL}/departments/${id}/`);

// Reusable function to handle GET requests
export const fetchData = (endpoint) => {
    return axios.get(`${API_URL}${endpoint}`);
}

// Reusable function to handle POST requests
export const postData = (endpoint, data) => {
    return axios.post(`${API_URL}${endpoint}`, data);
}

// Reusable function to handle PUT requests
export const putData = (endpoint, data) => {
    return axios.put(`${API_URL}${endpoint}`, data);
}

// Reusable function to handle DELETE requests
export const deleteData = (endpoint) => {
    return axios.delete(`${API_URL}${endpoint}`);
}
import axios from "axios";

const BASE_URL = 'https://bproductapp.onrender.com'

export const login =async(data) =>{
    try {
        const response = await axios.post(`${BASE_URL}/users/log-in`,data)
        return response.data
    } catch (error) {
       throw error 
    }
}

export const signup =async(data) =>{
    try {
        const response = await axios.post(`${BASE_URL}/users/sign-up`,data)
        return response.data
    } catch (error) {
       throw error 
    }
}

export const addProduct =async(data) =>{
    try {
        const response = await axios.post(`${BASE_URL}/products`,data)  //{"Content-Type":"multipart/form-data"},
        return response.data
    } catch (error) {
       throw error 
    }
}

export const getAllProduct =async() =>{
    try {
        const response = await axios.get(`${BASE_URL}/products`) 
        return response.data
    } catch (error) {
       throw error 
    }
}

export const getProductbyId =async(id) =>{
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`) 
        return response.data
    } catch (error) {
       throw error 
    }
}

export const deleteProduct =async(id) =>{
    try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`) 
        return response.data
    } catch (error) {
       throw error 
    }
}

export const updateProduct =async(id,data) =>{
    try {
        const response = await axios.post(`${BASE_URL}/products/${id}`,data) 
        return response.data
    } catch (error) {
       throw error 
    }
}
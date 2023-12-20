import axios from 'axios';
import dogDetails from '../types/types';


const url = "http://localhost:5005/";


const getDogsFromDB = async (endpoint: string) => {
  try {
    const response = await axios.get(`${url}${endpoint}`);
    return response;
  } catch (error) {
    return error;
  }
};

const postDogsToDB = async (endpoint: string, data: dogDetails) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data);
    return response;
  } catch (error) {
    return error;
  }
};

const updateDogsFromDB = async (endpoint: string, data: dogDetails) => {
    try {
      const response = await axios.put(`${url}${endpoint}`, data);
      return response;
    } catch (error) {
      return error;
    }
  };

const deleteDogsFromDB = async (endpoint: string, data: dogDetails) => {
    try {
      const response = await axios.delete(`${url}${endpoint}`, { data: data });
      return response;
    } catch (error) {
      return error;
    }
  };

  const postDogsImageToServer = async (endpoint: string, data: FormData) => {
    try {
      const response = await axios.post(`${url}${endpoint}`, data,
      );
      return response;
    } catch (error) {
      return error;
    }
  };
  

export { getDogsFromDB, postDogsToDB, updateDogsFromDB, deleteDogsFromDB, postDogsImageToServer};

import axiosInstance from 'axios'

export const axios = axiosInstance.create({
  baseURL: '/',
  timeout: 35000,
})
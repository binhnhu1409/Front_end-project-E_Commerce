import axios from "axios";

// to be able to update link easier later if we need to change the API
const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
})

export default axiosInstance
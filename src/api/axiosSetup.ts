import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_API_URL ||"localhost://127.0.0.1",
    withCredentials :true,
});

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization =`Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) =>{
        if(err.response?.status===401){
                window.location.href ="/login";
        }
        return Promise.reject(err);
    }
);

export default axiosInstance;
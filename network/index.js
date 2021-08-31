import axios from "axios";

const http = axios.create({
    baseURL:"https://fakestoreapi.com"
})

http.interceptors.response.use((res=>{
    return res.data
}))

export const get=(url)=>(
    http.get(url)
)

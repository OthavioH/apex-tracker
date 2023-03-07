import axios from "axios"

const api = axios.create({
    baseURL: "https://api.mozambiquehe.re",
});

export default api;
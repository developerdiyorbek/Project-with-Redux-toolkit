import axios from "axios";

axios.defaults.baseURL = "https://api.realworld.io/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.authorization = authorization;
  return config;
});

export default axios;

import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-manager-x2bf.onrender.com/api",
});

export default API;

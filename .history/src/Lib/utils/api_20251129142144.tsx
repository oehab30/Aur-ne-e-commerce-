import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:3000",   // ✅ FIXED
});

/*  m4 rade y4ta8l beha
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
*/
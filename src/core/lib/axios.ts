import Axios, { AxiosError } from "axios"





const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
})
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

axios.interceptors.request.use(
  (response) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      window.location.pathname = "/login"
    }
  }
)
export default axios

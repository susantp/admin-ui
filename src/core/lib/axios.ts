import Axios from "axios"

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
export default axios

import axios from "axios"

const token = "20a8ce6e-5952-445e-b51b-1ec3a46b520b"
const apiKey = "1960694e-a051-443e-ab6e-ba1f0682121e"

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1",
  headers: {
    Authorization: `Bearer ${token}`,
    "API-KEY": apiKey,
  },
})

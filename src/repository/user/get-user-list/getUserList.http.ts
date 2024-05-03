import axios from "axios"
import { GetUserListResponse } from "./getUserList.types"

export const getUserList = async () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<GetUserListResponse>(`${baseURL}/users`)

  return { body: res.data }
}

import axios from "axios"
import { FindUserParams, FindUserResponse } from "./findUser.types"

export const findUser = async (params: FindUserParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<FindUserResponse>(
    `${baseURL}/users/${params.userId}`
  )

  return res.data
}

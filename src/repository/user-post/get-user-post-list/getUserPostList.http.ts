import axios from "axios"
import {
  GetUserPostListResponse,
  GetUserPostListParams,
} from "./getUserPostList.types"

export const getUserPostList = async (params: GetUserPostListParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<GetUserPostListResponse>(
    `${baseURL}/users/${params.userId}/posts`
  )

  return res.data
}

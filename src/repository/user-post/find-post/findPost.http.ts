import axios from "axios"
import { FindPostResponse, FindPostParams } from "./findPost.types"

export const findPost = async (params: FindPostParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<FindPostResponse>(
    `${baseURL}/posts/${params.postId}`
  )

  return res.data
}

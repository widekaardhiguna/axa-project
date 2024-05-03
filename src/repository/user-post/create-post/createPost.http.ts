import axios from "axios"
import { CreatePostResponse, CreatePostParams } from "./createPost.types"

export const createPost = async (params: CreatePostParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const body = params
  const res = await axios.post<CreatePostResponse>(`${baseURL}/posts`, body)

  return res.data
}

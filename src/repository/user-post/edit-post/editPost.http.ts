import axios from "axios"
import { EditPostResponse, EditPostParams } from "./editPost.types"

export const editPost = async (params: EditPostParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const body = params
  const res = await axios.put<EditPostResponse>(
    `${baseURL}/posts/${params.id}`,
    body
  )

  return res.data
}

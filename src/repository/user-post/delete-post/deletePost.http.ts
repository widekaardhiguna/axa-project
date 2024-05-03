import axios from "axios"
import { DeletePostResponse, DeletePostParams } from "./deletePost.types"

export const deletePost = async (params: DeletePostParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const res = await axios.delete<DeletePostResponse>(
    `${baseURL}/posts/${params.id}`
  )

  return res.data
}

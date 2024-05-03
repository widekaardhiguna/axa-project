import axios from "axios"
import {
  EditPostCommentResponse,
  EditPostCommentParams,
} from "./editPostComment.types"

export const editPostComment = async (params: EditPostCommentParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const body = params
  const res = await axios.put<EditPostCommentResponse>(
    `${baseURL}/comments/${params.id}`,
    body
  )

  return res.data
}

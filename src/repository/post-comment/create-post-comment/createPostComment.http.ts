import axios from "axios"
import {
  CreatePostCommentResponse,
  CreatePostCommentParams,
} from "./createPostComment.types"

export const createPostComment = async (params: CreatePostCommentParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL

  const body = params
  const res = await axios.post<CreatePostCommentResponse>(
    `${baseURL}/posts/${params.postId}/comments`,
    body
  )

  return res.data
}

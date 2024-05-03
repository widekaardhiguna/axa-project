import axios from "axios"
import {
  GetPostCommentListResponse,
  GetPostCommentListParams,
} from "./getPostCommentList.types"

export const getPostCommentList = async (params: GetPostCommentListParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<GetPostCommentListResponse>(
    `${baseURL}/posts/${params.postId}/comments`
  )

  return res.data
}

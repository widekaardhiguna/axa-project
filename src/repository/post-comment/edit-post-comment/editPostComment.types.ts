import { Comment } from "../get-post-comment-list/getPostCommentList.types"

export type EditPostCommentParams = {
  id: number
  body: string
}

export type EditPostCommentResponse = Comment

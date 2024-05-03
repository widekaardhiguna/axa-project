import { Comment } from "../get-post-comment-list/getPostCommentList.types"

export type CreatePostCommentParams = {
  postId: number
  name: string
  email: string
  body: string
}

export type CreatePostCommentResponse = Comment

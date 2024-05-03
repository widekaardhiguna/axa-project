export type GetPostCommentListParams = {
  postId: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type GetPostCommentListResponse = Comment[]

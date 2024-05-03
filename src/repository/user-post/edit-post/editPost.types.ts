import { Post } from "../get-user-post-list/getUserPostList.types"

export type EditPostParams = {
  id: number
  userId: number
  title: string
  body: string
}

export type EditPostResponse = Post

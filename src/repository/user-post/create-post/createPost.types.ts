import { Post } from "../get-user-post-list/getUserPostList.types"

export type CreatePostParams = {
  userId: number
  title: string
  body: string
}

export type CreatePostResponse = Post

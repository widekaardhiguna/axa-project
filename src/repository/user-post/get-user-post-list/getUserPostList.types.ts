export type GetUserPostListParams = {
  userId: string
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type GetUserPostListResponse = Post[]

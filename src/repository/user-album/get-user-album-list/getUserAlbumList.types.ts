export type GetUserAlbumListParams = {
  userId: string
}

export type Album = {
  userId: number
  id: number
  title: string
}

export type GetUserAlbumListResponse = Album[]

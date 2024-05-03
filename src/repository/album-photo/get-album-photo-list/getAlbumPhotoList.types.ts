export type GetAlbumPhotoListParams = {
  albumId: string
}

export type Photo = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type GetAlbumPhotoListResponse = Photo[]

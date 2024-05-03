import axios from "axios"
import {
  GetAlbumPhotoListResponse,
  GetAlbumPhotoListParams,
} from "./getAlbumPhotoList.types"

export const getAlbumPhotoList = async (params: GetAlbumPhotoListParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<GetAlbumPhotoListResponse>(
    `${baseURL}/albums/${params.albumId}/photos`
  )

  return res.data
}

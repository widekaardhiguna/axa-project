import axios from "axios"
import {
  GetUserAlbumListResponse,
  GetUserAlbumListParams,
} from "./getUserAlbumList.types"

export const getUserAlbumList = async (params: GetUserAlbumListParams) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL
  const res = await axios.get<GetUserAlbumListResponse>(
    `${baseURL}/users/${params.userId}/albums`
  )

  return res.data
}

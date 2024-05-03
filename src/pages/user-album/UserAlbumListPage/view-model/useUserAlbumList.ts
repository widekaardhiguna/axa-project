import { useNavigate } from "react-router-dom"

export const useUserAlbumList = () => {
  const navigate = useNavigate()

  const onClickAlbumDetail = (albumId: number) => {
    navigate(`${albumId}/photos`)
  }

  return { onClickAlbumDetail }
}

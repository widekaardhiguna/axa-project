import { useNavigate } from "react-router-dom"

export const useUserList = () => {
  const navigate = useNavigate()

  const onClickViewAlbums = (userId: number) => {
    navigate(`${userId}/albums`)
  }

  const onClickSeePosts = (userId: number) => {
    navigate(`${userId}/posts`)
  }

  return { onClickViewAlbums, onClickSeePosts }
}

import { useNavigate } from "react-router-dom"

export const useUserPostList = () => {
  const navigate = useNavigate()

  const onClickPostDetail = (postId: number) => {
    navigate(`${postId}`)
  }

  return { onClickPostDetail }
}

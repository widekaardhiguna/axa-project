import { GetUserPostListResponse, useDeletePost } from "@/repository"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export type UseDeletePostService = {
  userId: number | string | undefined
  postId: number | string | undefined
  onSuccessDeletePost?: () => void
}

/**
 * responsible for sending the delete post request
 * and handling the effect after the post is successfully deleted
 */
export const useDeletePostService = ({
  userId,
  postId,
  onSuccessDeletePost: _onSuccessDeletePost,
}: UseDeletePostService) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // Update post data when post is successfully deleted
  const onSuccessDeletePost = () => {
    queryClient.setQueryData<GetUserPostListResponse>(
      ["user-post-list", { userId: String(userId) }],
      (prev) => {
        if (!prev) return prev
        return prev.filter((post) => post.id !== Number(postId))
      }
    )
    navigate(`/users/${userId}/posts`)
    _onSuccessDeletePost?.()
  }

  const { mutate: mutateDeletePost, status: statusDeletePost } = useDeletePost({
    onSuccess: onSuccessDeletePost,
  })

  const isDeletePostPending = statusDeletePost === "pending"

  const onDeletePost = (postId: number | string | undefined) => {
    if (!postId) return
    if (isDeletePostPending) return
    const isConfirmed = confirm("Are you sure to delete this post?")
    if (isConfirmed) {
      mutateDeletePost({ id: Number(postId) })
    }
  }

  return {
    onSuccessDeletePost,
    mutateDeletePost,
    statusDeletePost,
    isDeletePostPending,
    onDeletePost,
  }
}

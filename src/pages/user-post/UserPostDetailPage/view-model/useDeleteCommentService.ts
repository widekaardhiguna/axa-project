import { GetPostCommentListResponse } from "@/repository"
import { useQueryClient } from "@tanstack/react-query"

export type UseDeleteCommentService = {
  postId: number | string | undefined
  onSuccessDeleteComment?: () => void
}

/**
 * Update comment list when comment is successfully deleted,
 * Because there is no API for deleting comment, I will just remove it from the cache directly
 */
export const useDeleteCommentService = ({
  postId,
  onSuccessDeleteComment: _onSuccessDeleteComment,
}: UseDeleteCommentService) => {
  const queryClient = useQueryClient()

  const onDeleteComment = (commentId: number) => {
    const isConfirmed = confirm("Are you sure to delete this comment?")
    if (isConfirmed) {
      queryClient.setQueryData<GetPostCommentListResponse>(
        ["post-comment-list", { postId: String(postId) }],
        (prev) => {
          if (!prev) return prev
          return prev.filter((comment) => comment.id !== commentId)
        }
      )
      _onSuccessDeleteComment?.()
    }
  }

  return {
    onDeleteComment,
  }
}

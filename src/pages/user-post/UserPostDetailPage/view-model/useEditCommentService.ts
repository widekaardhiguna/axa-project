import {
  Comment,
  GetPostCommentListResponse,
  useEditPostComment,
} from "@/repository"
import { useQueryClient } from "@tanstack/react-query"

export type UseEditCommentService = {
  postId: number | string | undefined
  onSuccessEditComment?: (data: Comment) => void
}

/**
 * responsible for sending the create comment request
 * and handling the effect after the comment is successfully created
 */
export const useEditCommentService = ({
  postId,
  onSuccessEditComment: _onSuccessEditComment,
}: UseEditCommentService) => {
  const queryClient = useQueryClient()

  // Update comment data when comment is successfully edited
  const onSuccessEditComment = (data: Comment) => {
    queryClient.setQueryData<GetPostCommentListResponse>(
      ["post-comment-list", { postId: String(postId) }],
      (prev) => {
        if (!prev) return prev
        return prev.map((post) => {
          if (post.id === data.id) {
            return {
              ...post,
              body: data.body,
            }
          }
          return post
        })
      }
    )
    _onSuccessEditComment?.(data)
  }

  const { status: statusEditComment, mutate: mutateEditComment } =
    useEditPostComment({
      onSuccess: onSuccessEditComment,
    })

  const isEditCommentPending = statusEditComment === "pending"

  return {
    onSuccessEditComment,
    mutateEditComment,
    statusEditComment,
    isEditCommentPending,
  }
}

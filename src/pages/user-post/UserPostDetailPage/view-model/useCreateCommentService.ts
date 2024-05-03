import {
  Comment,
  GetPostCommentListResponse,
  useCreatePostComment,
} from "@/repository"
import { useQueryClient } from "@tanstack/react-query"

export type UseCreateCommentService = {
  postId: number | string | undefined
  onSuccessCreateComment?: (data: Comment) => void
}

/**
 * responsible for sending the create comment request
 * and handling the effect after the comment is successfully created
 */
export const useCreateCommentService = ({
  postId,
  onSuccessCreateComment: _onSuccessCreateComment,
}: UseCreateCommentService) => {
  const queryClient = useQueryClient()

  const onSuccessCreateComment = (data: Comment) => {
    queryClient.setQueryData<GetPostCommentListResponse>(
      ["post-comment-list", { postId: String(postId) }],
      (prev) => {
        if (!prev) return prev
        return [...prev, data]
      }
    )
    _onSuccessCreateComment?.(data)
  }
  const { mutate: mutateCreateComment, status: statusCreateComment } =
    useCreatePostComment({
      onSuccess: onSuccessCreateComment,
    })

  const isCreateCommentPending = statusCreateComment === "pending"

  return {
    onSuccessCreateComment,
    mutateCreateComment,
    statusCreateComment,
    isCreateCommentPending,
  }
}

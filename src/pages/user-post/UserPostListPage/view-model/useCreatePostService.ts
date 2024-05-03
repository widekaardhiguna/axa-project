import { GetUserPostListResponse, Post, useCreatePost } from "@/repository"
import { useQueryClient } from "@tanstack/react-query"

export type UseCreatePostService = {
  userId: number | string | undefined
  onSuccessCreatePost?: (data: Post) => void
}

/**
 * responsible for sending the create post request
 * and handling the effect after the post is successfully created
 */
export const useCreatePostService = ({
  userId,
  onSuccessCreatePost: _onSuccessCreatePost,
}: UseCreatePostService) => {
  const queryClient = useQueryClient()

  // Update post data when post is successfully edited
  const onSuccessCreatePost = (data: Post) => {
    queryClient.setQueryData<GetUserPostListResponse>(
      ["user-post-list", { userId: String(userId) }],
      (prev) => {
        if (!prev) return prev
        return [data, ...prev]
      }
    )
    _onSuccessCreatePost?.(data)
  }

  const { mutate: mutateCreatePost, status: statusCreatePost } = useCreatePost({
    onSuccess: onSuccessCreatePost,
  })

  const isCreatePostPending = statusCreatePost === "pending"

  return {
    onSuccessCreatePost,
    mutateCreatePost,
    statusCreatePost,
    isCreatePostPending,
  }
}

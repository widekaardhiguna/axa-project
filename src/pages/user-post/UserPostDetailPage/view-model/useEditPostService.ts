import {
  Post,
  GetUserPostListResponse,
  FindPostResponse,
  useEditPost,
} from "@/repository"
import { useQueryClient } from "@tanstack/react-query"

export type UseEditPostService = {
  userId: number | string | undefined

  postId: number | string | undefined
  onSuccessEditPost?: (data: Post) => void
}

/**
 * responsible for sending the edit post request
 * and handling the effect after the post is successfully edited
 */
export const useEditPostService = ({
  userId,
  postId,
  onSuccessEditPost: _onSuccessEditPost,
}: UseEditPostService) => {
  const queryClient = useQueryClient()

  // Update post data when post is successfully edited
  const onSuccessEditPost = (data: Post) => {
    // Update post data in find-post cache
    queryClient.setQueryData<FindPostResponse>(
      ["find-post", { postId }],
      (prev) => {
        if (!prev) return prev
        return {
          ...prev,
          title: data.title,
          body: data.body,
        }
      }
    )
    // Update post data in user-post-list cache
    queryClient.setQueryData<GetUserPostListResponse>(
      ["user-post-list", { userId: String(userId) }],
      (prev) => {
        if (!prev) return prev
        return prev.map((post) => {
          if (post.id === data.id) {
            return {
              ...post,
              title: data.title,
              body: data.body,
            }
          }
          return post
        })
      }
    )
    _onSuccessEditPost?.(data)
  }

  const { mutate: mutateEditPost, status: statusEditPost } = useEditPost({
    onSuccess: onSuccessEditPost,
  })

  const isEditPostPending = statusEditPost === "pending"

  return {
    onSuccessEditPost,
    mutateEditPost,
    statusEditPost,
    isEditPostPending,
  }
}

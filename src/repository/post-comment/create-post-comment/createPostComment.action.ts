import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { createPostComment } from "./createPostComment.http"
import {
  CreatePostCommentParams,
  CreatePostCommentResponse,
} from "./createPostComment.types"
import { AxiosError } from "axios"

export const useCreatePostComment = (
  options?: UseMutationOptions<
    CreatePostCommentResponse,
    AxiosError,
    CreatePostCommentParams
  >
) => {
  const query = useMutation<
    CreatePostCommentResponse,
    AxiosError,
    CreatePostCommentParams
  >({
    mutationKey: ["create-post-comment"],
    mutationFn: createPostComment,
    ...options,
  })
  return query
}

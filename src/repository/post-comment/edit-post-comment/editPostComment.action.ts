import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { editPostComment } from "./editPostComment.http"
import {
  EditPostCommentParams,
  EditPostCommentResponse,
} from "./editPostComment.types"
import { AxiosError } from "axios"

export const useEditPostComment = (
  options?: UseMutationOptions<
    EditPostCommentResponse,
    AxiosError,
    EditPostCommentParams
  >
) => {
  const query = useMutation<
    EditPostCommentResponse,
    AxiosError,
    EditPostCommentParams
  >({
    mutationKey: ["edit-post-comment"],
    mutationFn: editPostComment,
    ...options,
  })
  return query
}

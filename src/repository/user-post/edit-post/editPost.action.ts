import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { editPost } from "./editPost.http"
import { EditPostParams, EditPostResponse } from "./editPost.types"
import { AxiosError } from "axios"

export const useEditPost = (
  options?: UseMutationOptions<EditPostResponse, AxiosError, EditPostParams>
) => {
  const query = useMutation<EditPostResponse, AxiosError, EditPostParams>({
    mutationKey: ["edit-post"],
    mutationFn: editPost,
    ...options,
  })
  return query
}

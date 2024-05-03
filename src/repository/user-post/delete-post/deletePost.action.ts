import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { deletePost } from "./deletePost.http"
import { DeletePostParams, DeletePostResponse } from "./deletePost.types"
import { AxiosError } from "axios"

export const useDeletePost = (
  options?: UseMutationOptions<DeletePostResponse, AxiosError, DeletePostParams>
) => {
  const query = useMutation<DeletePostResponse, AxiosError, DeletePostParams>({
    mutationKey: ["delete-post"],
    mutationFn: deletePost,
    ...options,
  })
  return query
}

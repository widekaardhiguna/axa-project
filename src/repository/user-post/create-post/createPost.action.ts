import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { createPost } from "./createPost.http"
import { CreatePostParams, CreatePostResponse } from "./createPost.types"
import { AxiosError } from "axios"

export const useCreatePost = (
  options?: UseMutationOptions<CreatePostResponse, AxiosError, CreatePostParams>
) => {
  const query = useMutation<CreatePostResponse, AxiosError, CreatePostParams>({
    mutationKey: ["create-post"],
    mutationFn: createPost,
    ...options,
  })
  return query
}

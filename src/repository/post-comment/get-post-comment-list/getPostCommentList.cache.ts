import { useQuery } from "@tanstack/react-query"
import { getPostCommentList } from "./getPostCommentList.http"
import { GetPostCommentListParams } from "./getPostCommentList.types"

export const useGetPostCommentList = (params: GetPostCommentListParams) => {
  const query = useQuery({
    queryKey: ["post-comment-list", params],
    queryFn: async () => await getPostCommentList(params),
  })
  return query
}

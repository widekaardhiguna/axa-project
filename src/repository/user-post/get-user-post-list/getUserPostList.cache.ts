import { useQuery } from "@tanstack/react-query"
import { getUserPostList } from "./getUserPostList.http"
import { GetUserPostListParams } from "./getUserPostList.types"

export const useGetUserPostList = (params: GetUserPostListParams) => {
  const query = useQuery({
    queryKey: ["user-post-list", params],
    queryFn: async () => await getUserPostList(params),
  })
  return query
}

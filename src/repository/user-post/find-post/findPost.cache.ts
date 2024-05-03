import { useQuery } from "@tanstack/react-query"
import { findPost } from "./findPost.http"
import { FindPostParams } from "./findPost.types"

export const useFindPost = (params: FindPostParams) => {
  const query = useQuery({
    queryKey: ["find-post", params],
    queryFn: async () => await findPost(params),
  })
  return query
}

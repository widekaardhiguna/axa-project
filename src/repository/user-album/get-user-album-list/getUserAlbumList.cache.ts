import { useQuery } from "@tanstack/react-query"
import { getUserAlbumList } from "./getUserAlbumList.http"
import { GetUserAlbumListParams } from "./getUserAlbumList.types"

export const useGetUserAlbumList = (params: GetUserAlbumListParams) => {
  const query = useQuery({
    queryKey: ["user-album-list", params],
    queryFn: async () => await getUserAlbumList(params),
  })
  return query
}

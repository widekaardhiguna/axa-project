import { useQuery } from "@tanstack/react-query"
import { getAlbumPhotoList } from "./getAlbumPhotoList.http"
import { GetAlbumPhotoListParams } from "./getAlbumPhotoList.types"

export const useGetAlbumPhotoList = (params: GetAlbumPhotoListParams) => {
  const query = useQuery({
    queryKey: ["album-photo-list", params],
    queryFn: async () => await getAlbumPhotoList(params),
  })
  return query
}

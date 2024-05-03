import { useParams } from "react-router-dom"
import Typography from "@mui/material/Typography"
import { useGetUserAlbumList } from "@/repository"
import { AlbumList } from "./view/_AlbumList"
import { useUserAlbumList } from "./view-model/useUserAlbumList"

export const UserAlbumListPage = () => {
  const { userId } = useParams()
  const { data } = useGetUserAlbumList({ userId: String(userId) })

  const { onClickAlbumDetail } = useUserAlbumList()
  return (
    <>
      <Typography variant="h4" component="h2" align="center" mb={3}>
        Photo Albums
      </Typography>
      <AlbumList albums={data} onClickAlbumDetail={onClickAlbumDetail} />
    </>
  )
}

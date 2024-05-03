import { useGetUserList } from "@/repository"
import { UserList } from "./view/_UserList"
import { useUserList } from "./view-model/useUserList"
import { Typography } from "@mui/material"

export const UserListPage = () => {
  const { data } = useGetUserList()

  const { onClickSeePosts, onClickViewAlbums } = useUserList()

  return (
    <>
      <Typography variant="h4" component="h2" align="center" mb={3}>
        People you might know
      </Typography>
      <UserList
        users={data?.body}
        onClickSeePosts={onClickSeePosts}
        onClickViewAlbums={onClickViewAlbums}
      />
    </>
  )
}

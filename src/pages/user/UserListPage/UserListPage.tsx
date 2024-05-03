import { useGetUserList } from "@/repository"
import { UserList } from "./view/_UserList"
import { useUserList } from "./view-model/useUserList"

export const UserListPage = () => {
  const { data } = useGetUserList()

  const { onClickSeePosts, onClickViewAlbums } = useUserList()

  return (
    <UserList
      users={data?.body}
      onClickSeePosts={onClickSeePosts}
      onClickViewAlbums={onClickViewAlbums}
    />
  )
}

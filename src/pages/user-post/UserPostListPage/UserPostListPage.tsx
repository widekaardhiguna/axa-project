import { useFindUser, useGetUserPostList } from "@/repository"
import { Button } from "@mui/material"
import { useParams } from "react-router-dom"
import { CreatePostDialog } from "./view/_CreatePostDialog"
import { useCreatePostDialog } from "./view-model/useCreatePostDialog"
import { useCreatePostForm } from "./view-model/useCreatePostForm"
import { useUserPostList } from "./view-model/useUserPostList"
import { useCreatePostService } from "./view-model/useCreatePostService"
import { UserPostListLayout } from "./view/_UserPostListLayout"
import { ProfileInfo } from "./view/_ProfileInfo"
import { PostList } from "./view/_PostList"

export const UserPostListPage = () => {
  const { userId } = useParams()

  // fetch user detail and post list
  const { data: dataDetailUser } = useFindUser({ userId: String(userId) })
  const { data: dataPostList } = useGetUserPostList({ userId: String(userId) })

  // create post service
  const { mutateCreatePost, isCreatePostPending } = useCreatePostService({
    userId: userId,
    onSuccessCreatePost: () => {
      onCloseCreatePostDialog()
      resetPostStates()
    },
  })

  // create post form
  const {
    body,
    title,
    onChangeBody,
    onChangeTitle,
    onSubmitCreatePost,
    resetPostStates,
  } = useCreatePostForm({
    userId: userId,
    disableSubmit: isCreatePostPending,
    submit: mutateCreatePost,
  })

  // create post dialog
  const {
    createPostDialogProps,
    onCloseCreatePostDialog,
    onOpenCreatePostDialog,
  } = useCreatePostDialog()

  const { onClickPostDetail } = useUserPostList()

  return (
    <>
      <UserPostListLayout
        top={<ProfileInfo name={dataDetailUser?.name} />}
        action={
          <Button variant="contained" onClick={onOpenCreatePostDialog}>
            New Post
          </Button>
        }
        bottom={
          <PostList
            posts={dataPostList}
            company={dataDetailUser?.name}
            name={dataDetailUser?.company.name}
            onClickPostDetail={onClickPostDetail}
          />
        }
      />
      <CreatePostDialog
        {...createPostDialogProps}
        title={title}
        onChangeTitle={onChangeTitle}
        body={body}
        onChangeBody={onChangeBody}
        onClose={onCloseCreatePostDialog}
        onSubmit={onSubmitCreatePost}
      />
    </>
  )
}

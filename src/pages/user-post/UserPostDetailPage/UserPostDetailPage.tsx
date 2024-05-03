import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFindUser, useGetPostCommentList, useFindPost } from "@/repository"
import { CommentForm } from "@/components"
import { EditPostDialog } from "./view/_EditPostDialog"
import { EditCommentDialog } from "./view/_EditCommentDialog"
import { useEditPostDialog } from "./view-model/useEditPostDialog"
import { useEditCommentDialog } from "./view-model/useEditCommentDialog"
import { useEditCommentForm } from "./view-model/useEditCommentForm"
import { useEditCommentService } from "./view-model/useEditCommentService"
import { useEditPostForm } from "./view-model/useEditPostForm"
import { useEditPostService } from "./view-model/useEditPostService"
import { useDeletePostService } from "./view-model/useDeletePostService"
import { useCreateCommentForm } from "./view-model/useCreateCommentForm"
import { useCreateCommentService } from "./view-model/useCreateCommentService"
import { useDeleteCommentService } from "./view-model/useDeleteCommentService"
import { UserPostDetailLayout } from "./view/_UserPostDetailLayout"
import { PostDetail } from "./view/_PostDetail"
import { CommentList } from "./view/_CommentList"

export const UserPostDetailPage = () => {
  const { postId, userId } = useParams()

  // FETCH ALL DATA
  const { data: dataUserDetail } = useFindUser({ userId: String(userId) })
  const { data: dataPostDetail } = useFindPost({ postId: String(postId) })
  const { data: dataCommentList } = useGetPostCommentList({
    postId: String(postId),
  })

  // CREATE COMMENT
  //#region
  const { clearCommentStates, comment, onChangeComment, onSubmitComment } =
    useCreateCommentForm({
      name: dataUserDetail?.name,
      email: dataUserDetail?.email,
      postId: String(postId),
      submit: (payload) => {
        mutateCreateComment(payload)
      },
    })

  const { mutateCreateComment } = useCreateCommentService({
    postId,
    onSuccessCreateComment: clearCommentStates,
  })
  //#endregion

  // EDIT COMMENT
  //#region
  const {
    editCommentDialogProps,
    onCloseEditCommentDialog,
    onOpenEditCommentDialog,
  } = useEditCommentDialog({
    onOpenDialog: (comment) => {
      setCommentEdited(comment.body)
      setCommentIdEdited(comment.id)
    },
  })

  const { mutateEditComment, isEditCommentPending } = useEditCommentService({
    postId,
    onSuccessEditComment: onCloseEditCommentDialog,
  })

  const {
    commentEdited,
    onChangeCommentEdited,
    onSubmitEditComment,
    setCommentEdited,
    setCommentIdEdited,
  } = useEditCommentForm({
    disableSubmit: isEditCommentPending,
    submit: (payload) => {
      mutateEditComment(payload)
    },
  })
  //#endregion

  // EDIT POST
  //#region
  const { editPostDialogProps, onCloseEditPostDialog, onOpenEditPostDialog } =
    useEditPostDialog()

  const { mutateEditPost, statusEditPost } = useEditPostService({
    postId,
    userId,
    onSuccessEditPost: onCloseEditPostDialog,
  })

  const {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onSubmitEditPost,
    setBody,
    setTitle,
  } = useEditPostForm({
    postId,
    userId,
    disableSubmit: statusEditPost === "pending",
    submit: (payload) => {
      mutateEditPost(payload)
    },
  })

  // Update title and body when dataPostDetail is fetched
  useEffect(() => {
    if (!dataPostDetail) return
    setTitle(dataPostDetail.title)
    setBody(dataPostDetail.body)
  }, [dataPostDetail, setTitle, setBody])

  //#endregion

  // DELETE POST
  //#region
  const { onDeletePost } = useDeletePostService({
    postId,
    userId,
  })
  //#endregion

  // DELETE COMMENT
  //#region
  const { onDeleteComment } = useDeleteCommentService({
    postId,
  })
  //#endregion

  return (
    <>
      <UserPostDetailLayout
        top={
          <PostDetail
            name={dataUserDetail?.name}
            company={dataUserDetail?.company.name}
            title={dataPostDetail?.title}
            body={dataPostDetail?.body}
            onClickDeletePost={() => onDeletePost(postId)}
            onClickEditPost={onOpenEditPostDialog}
          />
        }
        mid={
          <CommentList
            comments={dataCommentList}
            onClickDeleteComment={onDeleteComment}
            onClickEditComment={onOpenEditCommentDialog}
          />
        }
        bottom={
          <CommentForm
            comment={comment}
            onChangeComment={onChangeComment}
            onSubmit={onSubmitComment}
          />
        }
      />
      <EditPostDialog
        {...editPostDialogProps}
        title={title}
        onChangeTitle={onChangeTitle}
        body={body}
        onChangeBody={onChangeBody}
        onClose={onCloseEditPostDialog}
        onSubmit={onSubmitEditPost}
      />
      <EditCommentDialog
        {...editCommentDialogProps}
        comment={commentEdited}
        onChangeComment={onChangeCommentEdited}
        onClose={onCloseEditCommentDialog}
        onSubmit={onSubmitEditComment}
      />
    </>
  )
}

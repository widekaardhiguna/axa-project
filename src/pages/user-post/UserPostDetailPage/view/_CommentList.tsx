import Avatar from "@mui/material/Avatar"
import { CardHeader, IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { Comment, GetPostCommentListResponse } from "@/repository"

export type CommentListProps = {
  comments: GetPostCommentListResponse | undefined
  onClickDeleteComment?: (id: number) => void
  onClickEditComment?: (comment: Comment) => void
}
export const CommentList = ({
  comments,
  onClickDeleteComment,
  onClickEditComment,
}: CommentListProps) => {
  return comments?.map((comment) => (
    <CardHeader
      key={comment.id}
      avatar={<Avatar aria-label="commenter avatar"></Avatar>}
      title={comment.name}
      subheader={comment.body}
      action={
        <>
          <IconButton
            aria-label="settings"
            size="small"
            onClick={() => onClickDeleteComment?.(comment.id)}
            data-testid="delete-button-test"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="settings"
            size="small"
            onClick={() => onClickEditComment?.(comment)}
            data-testid="edit-button-test"
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  ))
}

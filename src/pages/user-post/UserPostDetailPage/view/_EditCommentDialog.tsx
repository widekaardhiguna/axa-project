import Button from "@mui/material/Button"
import Dialog, { DialogProps } from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { CommentForm, CommentFormProps } from "@/components"

export type EditCommentDialogProps = Omit<DialogProps, "onSubmit"> &
  CommentFormProps

export const EditCommentDialog = (props: EditCommentDialogProps) => {
  const { open, onClose, onSubmit, comment, onChangeComment } = props

  const _onClose = () => {
    onClose?.({}, "backdropClick")
  }

  const formId = "edit-comment-form"

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Edit Comment</DialogTitle>
      <DialogContent sx={{ minWidth: 600 }}>
        <CommentForm
          formId={formId}
          comment={comment}
          onChangeComment={onChangeComment}
          onSubmit={onSubmit}
          showInnerButton={false}
        />
      </DialogContent>
      <DialogActions>
        <Button type="button" onClick={_onClose}>
          Close
        </Button>
        <Button type="submit" variant="contained" form={formId}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

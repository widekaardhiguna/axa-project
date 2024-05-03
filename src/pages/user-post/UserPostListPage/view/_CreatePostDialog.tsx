import Button from "@mui/material/Button"
import Dialog, { DialogProps } from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { PostForm, PostFormProps } from "@/components"

export type CreatePostDialogProps = Omit<DialogProps, "onSubmit"> &
  PostFormProps

export const CreatePostDialog = (props: CreatePostDialogProps) => {
  const { open, onClose, title, body, onSubmit, onChangeBody, onChangeTitle } =
    props

  const _onClose = () => {
    onClose?.({}, "backdropClick")
  }

  const formId = "create-post-form"

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Create Post</DialogTitle>
      <DialogContent>
        <PostForm
          formId={formId}
          title={title}
          body={body}
          onChangeBody={onChangeBody}
          onChangeTitle={onChangeTitle}
          onSubmit={onSubmit}
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

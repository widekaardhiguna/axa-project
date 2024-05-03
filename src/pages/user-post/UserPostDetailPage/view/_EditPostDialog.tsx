import Button from "@mui/material/Button"
import Dialog, { DialogProps } from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { PostForm, PostFormProps } from "@/components"

export type EditPostDialogProps = Omit<DialogProps, "onSubmit"> & PostFormProps

export const EditPostDialog = (props: EditPostDialogProps) => {
  const { open, onClose, title, body, onSubmit, onChangeBody, onChangeTitle } =
    props

  const _onClose = () => {
    onClose?.({}, "backdropClick")
  }

  const formId = "edit-post-form"

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Edit Post</DialogTitle>
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

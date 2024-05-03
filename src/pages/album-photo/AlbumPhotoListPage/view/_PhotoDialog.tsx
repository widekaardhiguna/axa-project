import Button from "@mui/material/Button"
import Dialog, { DialogProps } from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

export type PhotoDialogProps = DialogProps & {
  title: string
  url: string
  alt: string
}

export const PhotoDialog = ({
  open,
  title,
  url,
  alt,
  onClose,
}: PhotoDialogProps) => {
  const _onClose = () => {
    onClose?.({}, "backdropClick")
  }
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={url} alt={alt} height={600} width={600} />
      </DialogContent>
      <DialogActions>
        <Button onClick={_onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

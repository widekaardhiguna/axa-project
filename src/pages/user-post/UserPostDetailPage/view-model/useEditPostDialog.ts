import { useState } from "react"
import { EditPostDialogProps } from "../view/_EditPostDialog"

/**
 * responsible for showing and hiding the edit post dialog
 */
export const useEditPostDialog = () => {
  const [editPostDialogProps, setEditPostProps] = useState<EditPostDialogProps>(
    {
      open: false,
    }
  )
  const onOpenEditPostDialog = () => {
    setEditPostProps({
      open: true,
    })
  }
  const onCloseEditPostDialog = () => {
    setEditPostProps((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return {
    editPostDialogProps,
    onOpenEditPostDialog,
    onCloseEditPostDialog,
  }
}

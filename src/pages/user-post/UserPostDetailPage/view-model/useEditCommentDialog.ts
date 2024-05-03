import { useState } from "react"
import { EditCommentDialogProps } from "../view/_EditCommentDialog"
import { Comment } from "@/repository"

export type UseEditCommentDialog = {
  onOpenDialog?: (comment: Comment) => void
}

/**
 * responsible for showing and hiding the edit comment dialog
 */
export const useEditCommentDialog = ({
  onOpenDialog,
}: UseEditCommentDialog) => {
  const [editCommentDialogProps, setEditCommentDialogProps] =
    useState<EditCommentDialogProps>({
      open: false,
    })
  const onOpenEditCommentDialog = (comment: Comment) => {
    onOpenDialog?.(comment)
    // setCommentEdited(comment.body)
    // setCommentIdEdited(comment.id)
    setEditCommentDialogProps({
      open: true,
    })
  }
  const onCloseEditCommentDialog = () => {
    setEditCommentDialogProps((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return {
    editCommentDialogProps,
    onOpenEditCommentDialog,
    onCloseEditCommentDialog,
  }
}

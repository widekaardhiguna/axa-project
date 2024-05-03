import { useState } from "react"
import { CreatePostDialogProps } from "../view/_CreatePostDialog"

/**
 * responsible for showing and hiding the create post dialog
 */
export const useCreatePostDialog = () => {
  const [createPostDialogProps, setCreatePostProps] =
    useState<CreatePostDialogProps>({
      open: false,
    })
  const onOpenCreatePostDialog = () => {
    setCreatePostProps({
      open: true,
    })
  }
  const onCloseCreatePostDialog = () => {
    setCreatePostProps((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return {
    createPostDialogProps,
    onOpenCreatePostDialog,
    onCloseCreatePostDialog,
  }
}

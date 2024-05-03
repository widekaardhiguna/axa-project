import { useState } from "react"
import { PhotoDialogProps } from "../view/_PhotoDialog"
import { Photo } from "@/repository"

export const useAlbumPhotoDialog = () => {
  const [dialogProps, setDialogProps] = useState<PhotoDialogProps>({
    open: false,
    title: "",
    url: "",
    alt: "",
  })
  const onOpenPhotoDialog = (photo: Photo) => {
    setDialogProps({
      open: true,
      title: photo.title,
      url: photo.url,
      alt: `${photo.title} image`,
    })
  }
  const onClosePhotoDialog = () => {
    setDialogProps((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return {
    dialogProps,
    onOpenPhotoDialog,
    onClosePhotoDialog,
  }
}

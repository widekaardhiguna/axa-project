import { useGetAlbumPhotoList } from "../../../repository"

import { useParams } from "react-router-dom"
import { PhotoDialog } from "./view/_PhotoDialog"
import { useAlbumPhotoDialog } from "./view-model/useAlbumPhotoDialog"
import { PhotoList } from "./view/_PhotoList"

export const AlbumPhotoListPage = () => {
  const { albumId } = useParams()
  const { data } = useGetAlbumPhotoList({
    albumId: String(albumId),
  })
  const { dialogProps, onClosePhotoDialog, onOpenPhotoDialog } =
    useAlbumPhotoDialog()

  return (
    <>
      <PhotoList photos={data} onClickPhoto={onOpenPhotoDialog} />
      <PhotoDialog {...dialogProps} onClose={onClosePhotoDialog} />
    </>
  )
}

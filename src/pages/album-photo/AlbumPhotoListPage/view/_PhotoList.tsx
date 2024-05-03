import { Button, ImageList, ImageListItem } from "@mui/material"
import { GetAlbumPhotoListResponse, Photo } from "@/repository"

export type PhotoListProps = {
  photos: GetAlbumPhotoListResponse | undefined
  onClickPhoto?: (photo: Photo) => void
}

export const PhotoList = ({ photos, onClickPhoto }: PhotoListProps) => {
  return (
    photos && (
      <ImageList variant="quilted" cols={4}>
        {photos.map((photo) => (
          <ImageListItem
            key={photo.id}
            component={Button}
            onClick={() => onClickPhoto?.(photo)}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </ImageListItem>
        ))}
      </ImageList>
    )
  )
}

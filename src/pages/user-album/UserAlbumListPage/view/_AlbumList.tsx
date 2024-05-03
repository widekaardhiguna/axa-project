import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import FolderIcon from "@mui/icons-material/Folder"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { GetUserAlbumListResponse } from "@/repository"

export type AlbumListProps = {
  albums: GetUserAlbumListResponse | undefined
  onClickAlbumDetail?: (albumId: number) => void
}

export const AlbumList = ({ albums, onClickAlbumDetail }: AlbumListProps) => {
  return albums?.map((album) => (
    <List key={album.id}>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="album detail"
            onClick={() => onClickAlbumDetail?.(album.id)}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={album.title} />
      </ListItem>
    </List>
  ))
}

import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"

import { Button, Typography } from "@mui/material"
import { GetUserListResponse } from "@/repository"

export type UserListProps = {
  users: GetUserListResponse | undefined
  onClickViewAlbums?: (userId: number) => void
  onClickSeePosts?: (userId: number) => void
}

export const UserList = ({
  users,
  onClickSeePosts,
  onClickViewAlbums,
}: UserListProps) => {
  return (
    <Grid container spacing={2}>
      {users?.map((user) => (
        <Grid key={user.id} item xs={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">{user.name.charAt(0)}</Avatar>
              }
              title={user.name}
              subheader={user.email}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Work at {user.company.name}, live in {user.address.city}, and my
                website is {user.website}.
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "flex-end", gap: 1 }}
            >
              <Button
                size="small"
                color="primary"
                onClick={() => onClickViewAlbums?.(user.id)}
              >
                View Albums
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => onClickSeePosts?.(user.id)}
              >
                See Posts
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

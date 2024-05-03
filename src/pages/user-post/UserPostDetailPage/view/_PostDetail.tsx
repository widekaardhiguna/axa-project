import { PostCard } from "@/components"
import { Button } from "@mui/material"

export type PostDetailProps = {
  name?: string
  company?: string
  title?: string
  body?: string
  onClickDeletePost: () => void
  onClickEditPost: () => void
}
export const PostDetail = ({
  onClickDeletePost,
  onClickEditPost,
  name,
  company,
  title,
  body,
}: PostDetailProps) => {
  return (
    <PostCard
      name={name}
      company={company}
      title={title}
      body={body}
      action={
        <>
          <Button size="small" color="inherit" onClick={onClickDeletePost}>
            Delete Post
          </Button>
          <Button size="small" onClick={onClickEditPost}>
            Edit Post
          </Button>
        </>
      }
    />
  )
}

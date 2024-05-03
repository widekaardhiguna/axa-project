import { PostCard } from "@/components"
import { GetUserPostListResponse } from "@/repository"
import { IconButton } from "@mui/material"
import InsertCommentIcon from "@mui/icons-material/InsertComment"

// name and company needed because response API doesn't have user name and company
export type PostListProps = {
  name?: string
  company?: string
  posts?: GetUserPostListResponse
  onClickPostDetail?: (postId: number) => void
}

export const PostList = ({
  posts,
  company,
  name,
  onClickPostDetail,
}: PostListProps) => {
  return posts?.map((post) => (
    <PostCard
      key={post.id}
      name={name}
      company={company}
      title={post.title}
      body={post.body}
      action={
        <IconButton
          aria-label="post detail"
          color="primary"
          onClick={() => onClickPostDetail?.(post.id)}
        >
          <InsertCommentIcon />
        </IconButton>
      }
    />
  ))
}

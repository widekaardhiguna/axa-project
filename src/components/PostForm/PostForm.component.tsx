import { Box, TextField } from "@mui/material"

export type PostFormProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  title?: string
  onChangeTitle?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  body?: string
  onChangeBody?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  formId?: string
}

export const PostForm = (props: PostFormProps) => {
  const { onSubmit, body, onChangeBody, onChangeTitle, title, formId } = props
  return (
    <Box
      component="form"
      id={formId}
      onSubmit={onSubmit}
      data-testid="post-test-form"
    >
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => onChangeTitle?.(e)}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        minRows={3}
        value={body}
        onChange={(e) => onChangeBody?.(e)}
      />
    </Box>
  )
}

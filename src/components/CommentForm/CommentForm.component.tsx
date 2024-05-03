import { Box, IconButton, TextField } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

export type CommentFormProps = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  comment?: string
  onChangeComment?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  formId?: string
  showInnerButton?: boolean
}

export const CommentForm = ({
  onSubmit,
  comment,
  onChangeComment,
  formId,
  showInnerButton = true,
}: CommentFormProps) => {
  return (
    <Box component="form" id={formId} onSubmit={onSubmit}>
      <TextField
        label="Type comment"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        InputProps={{
          endAdornment: showInnerButton ? (
            <IconButton type="submit" color="primary">
              <SendIcon />
            </IconButton>
          ) : undefined,
        }}
        multiline
        minRows={3}
        value={comment}
        onChange={(e) => onChangeComment?.(e)}
        data-testid="comment-test-form"
      />
    </Box>
  )
}

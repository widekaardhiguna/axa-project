import { EditPostCommentParams } from "@/repository"
import { useState } from "react"

export type UseEditCommentForm = {
  disableSubmit: boolean
  submit: (payload: EditPostCommentParams) => void
}

export const useEditCommentForm = ({
  disableSubmit,
  submit,
}: UseEditCommentForm) => {
  const [commentEdited, setCommentEdited] = useState("")
  const [commentIdEdited, setCommentIdEdited] = useState(0)

  const onChangeCommentEdited = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommentEdited(e.target.value)
  }

  const onSubmitEditComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (disableSubmit) return
    submit({
      body: commentEdited,
      id: commentIdEdited,
    })
  }

  return {
    commentEdited,
    commentIdEdited,
    onChangeCommentEdited,
    onSubmitEditComment,
    setCommentEdited,
    setCommentIdEdited,
  }
}

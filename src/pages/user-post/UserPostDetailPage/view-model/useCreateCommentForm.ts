import { CreatePostCommentParams } from "@/repository"
import { useState } from "react"

export type UseCreateCommentForm = {
  name: string | undefined
  email: string | undefined
  postId: string | undefined
  disableSubmit?: boolean
  submit: (payload: CreatePostCommentParams) => void
}

export const useCreateCommentForm = ({
  email,
  name,
  postId,
  disableSubmit = false,
  submit,
}: UseCreateCommentForm) => {
  const [comment, setComment] = useState("")

  const clearCommentStates = () => {
    setComment("")
  }

  const onChangeComment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment(e.target.value)
  }

  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (disableSubmit) return
    submit({
      name: name ?? "",
      body: comment,
      email: email ?? "",
      postId: Number(postId),
    })
  }

  return {
    comment,
    onChangeComment,
    onSubmitComment,
    setComment,
    clearCommentStates,
  }
}

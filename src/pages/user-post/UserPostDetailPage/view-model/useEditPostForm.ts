import { EditPostParams } from "@/repository"
import { useState } from "react"

export type UseEditPostForm = {
  disableSubmit: boolean
  submit: (payload: EditPostParams) => void
  postId: string | undefined
  userId: string | undefined
}

export const useEditPostForm = ({
  disableSubmit,
  submit,
  postId,
  userId,
}: UseEditPostForm) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const onChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value)
  }
  const onChangeBody = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBody(e.target.value)
  }
  const onSubmitEditPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (disableSubmit) return
    submit({ id: Number(postId), userId: Number(userId), title, body })
  }

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onSubmitEditPost,
    setTitle,
    setBody,
  }
}

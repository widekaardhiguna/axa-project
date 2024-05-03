import { CreatePostParams } from "@/repository"
import { useState } from "react"

export type UseCreatePostForm = {
  userId: number | string | undefined
  disableSubmit: boolean
  submit: (payload: CreatePostParams) => void
}

/**
 * responsible for handling the form state and submission of the create post form
 */
export const useCreatePostForm = ({
  disableSubmit,
  submit,
  userId,
}: UseCreatePostForm) => {
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
  const resetPostStates = () => {
    setTitle("")
    setBody("")
  }
  const onSubmitCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (disableSubmit) return
    submit({ userId: Number(userId), title, body })
  }

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    resetPostStates,
    onSubmitCreatePost,
  }
}

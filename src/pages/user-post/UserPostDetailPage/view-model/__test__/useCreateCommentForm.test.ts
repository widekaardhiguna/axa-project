import { vi } from "vitest"
import { useCreateCommentForm } from "../useCreateCommentForm"
import { renderHook, act } from "@testing-library/react"

describe("useCreateCommentForm", () => {
  test("should update form values correctly", () => {
    const { result } = renderHook(() =>
      useCreateCommentForm({
        email: "",
        name: "",
        postId: "",
        submit: vi.fn(),
      })
    )

    // set comment
    act(() => {
      result.current.setComment("John Doe")
    })
    expect(result.current.comment).toBe("John Doe")

    // clear all states
    act(() => {
      result.current.clearCommentStates()
    })
    expect(result.current.comment).toBe("")
  })
})

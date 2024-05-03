import { renderHook, act } from "@testing-library/react"
import { useCreatePostForm } from "../useCreatePostForm"
import { vi } from "vitest"

describe("useCreatePostForm", () => {
  it("should initialize with correct initial values", () => {
    const { result } = renderHook(() =>
      useCreatePostForm({
        disableSubmit: false,
        submit: vi.fn(),
        userId: 1,
      })
    )

    expect(result.current.title).toBe("")
    expect(result.current.body).toBe("")
  })

  it("should update userId when provided", () => {
    const { result } = renderHook(() =>
      useCreatePostForm({
        disableSubmit: false,
        submit: vi.fn(),
        userId: 1,
      })
    )

    act(() => {
      const body = {
        target: { value: "body text" },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onChangeBody(body)

      const title = {
        target: { value: "title text" },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onChangeTitle(title)
    })

    expect(result.current.title).toBe("title text")
    expect(result.current.body).toBe("body text")
  })

  test("should call submit function with correct payload", () => {
    const submitMock = vi.fn()
    const { result } = renderHook(() =>
      useCreatePostForm({
        disableSubmit: false,
        submit: submitMock,
        userId: 1,
      })
    )

    const payload = {
      userId: 1,
      title: "Test Post",
      body: "This is a test post",
    }

    // set form values
    act(() => {
      const body = {
        target: { value: payload.body },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onChangeBody(body)

      const title = {
        target: { value: payload.title },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onChangeTitle(title)
    })

    // submit form
    act(() => {
      const form = {
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>

      result.current.onSubmitCreatePost(form)
    })

    expect(submitMock).toHaveBeenCalledWith(payload)
  })
})

import { render, screen, fireEvent } from "@testing-library/react"
import { PostForm, PostFormProps } from "../PostForm.component"
import { vi } from "vitest"

describe("PostForm", () => {
  const defaultProps: PostFormProps = {
    onSubmit: vi.fn(),
  }

  it("renders the form correctly", () => {
    render(<PostForm {...defaultProps} />)
    const commentForm = screen.getByTestId("post-test-form")
    expect(commentForm).toBeInTheDocument()
  })

  it("calls onSubmit when the form is submitted", () => {
    render(<PostForm {...defaultProps} />)
    const postForm = screen.getByTestId("post-test-form")
    const titleInput = screen.getByLabelText(/title/i)

    fireEvent.change(titleInput, { target: { value: "Test title" } })
    expect(titleInput).toHaveValue("Test title")

    const bodyInput = screen.getByLabelText(/body/i)
    fireEvent.change(bodyInput, { target: { value: "Test body" } })
    expect(bodyInput).toHaveValue("Test body")

    fireEvent.submit(postForm)
    expect(defaultProps.onSubmit).toHaveBeenCalled()
  })
})

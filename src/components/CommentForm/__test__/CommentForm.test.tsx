import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from "vitest"
import { CommentForm, CommentFormProps } from "../CommentForm.component"

describe("CommentForm", () => {
  const defaultProps: CommentFormProps = {
    onSubmit: vi.fn(),
  }

  it("renders the comment form", () => {
    render(<CommentForm {...defaultProps} />)
    const commentForm = screen.getByTestId("comment-test-form")
    expect(commentForm).toBeInTheDocument()
  })

  it("calls onSubmit when the form is submitted", () => {
    render(<CommentForm {...defaultProps} />)
    const commentForm = screen.getByTestId("comment-test-form")
    const commentInput = screen.getByLabelText(/type comment/i)

    fireEvent.change(commentInput, { target: { value: "Test comment" } })
    expect(commentInput).toHaveValue("Test comment")

    fireEvent.submit(commentForm)

    expect(defaultProps.onSubmit).toHaveBeenCalled()
  })
})

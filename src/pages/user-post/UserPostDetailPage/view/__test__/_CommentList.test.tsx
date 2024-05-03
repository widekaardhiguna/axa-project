import { render, screen } from "@testing-library/react"
import { CommentList, CommentListProps } from "../_CommentList"
import { vi } from "vitest"

describe("CommentList", () => {
  const mockComments: CommentListProps["comments"] = [
    // Add more mock
    {
      id: 1,
      postId: 1,
      body: "Comment 1",
      name: "jane doe",
      email: "jane@mail.com",
    },
    {
      id: 2,
      postId: 1,
      body: "Comment 2",
      name: "john doe",
      email: "john@mail.com",
    },
  ]

  it("renders the comments correctly", () => {
    render(<CommentList comments={mockComments} />)

    mockComments.forEach((comment) => {
      const commentElement = screen.getByText(comment.body)
      expect(commentElement).toHaveTextContent(comment.body)
    })
  })

  it("calls onClickDeleteComment when delete button is clicked", () => {
    const mockOnClickDeleteComment = vi.fn()
    render(
      <CommentList
        comments={[mockComments[0]]}
        onClickDeleteComment={mockOnClickDeleteComment}
      />
    )

    const deleteButtons = screen.getAllByTestId("delete-button-test")
    deleteButtons.forEach((button) => {
      button.click()
      expect(mockOnClickDeleteComment).toHaveBeenCalled()
    })
  })

  it("calls onClickEditComment when edit button is clicked", () => {
    const mockOnClickEditComment = vi.fn()
    render(
      <CommentList
        comments={[mockComments[0]]}
        onClickEditComment={mockOnClickEditComment}
      />
    )

    const editButtons = screen.getAllByTestId("edit-button-test")
    editButtons.forEach((button) => {
      button.click()
      expect(mockOnClickEditComment).toHaveBeenCalled()
    })
  })
})

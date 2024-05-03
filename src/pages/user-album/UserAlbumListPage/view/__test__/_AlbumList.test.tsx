import { AlbumList, AlbumListProps } from "../_AlbumList"
import { render, screen } from "@testing-library/react"

describe("AlbumList", () => {
  const defaultProps: AlbumListProps = {
    albums: [
      {
        userId: 1,
        id: 1,
        title: "Test Album 1",
      },
      {
        userId: 1,
        id: 2,
        title: "Test Album 2",
      },
    ],
  }

  it("renders the list of albums", () => {
    render(<AlbumList {...defaultProps} />)

    // Assert that the album titles are rendered
    expect(screen.getByText("Test Album 1")).toBeInTheDocument()
    expect(screen.getByText("Test Album 2")).toBeInTheDocument()
  })
})

import { PostCard, PostCardProps } from "../PostCard.component"
import { render, screen } from "@testing-library/react"

describe("PostCard", () => {
  it("renders correct props", () => {
    const props: PostCardProps = {
      title: "Test Post",
      body: "This is a test post",
      company: "Test Company",
      name: "Test Name",
    }

    render(<PostCard {...props} />)

    const title = screen.getByText("Test Post")
    const body = screen.getByText("This is a test post")
    const company = screen.getByText("Test Company")
    const name = screen.getByText("Test Name")

    expect(title).toBeInTheDocument()
    expect(body).toBeInTheDocument()
    expect(company).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })
})

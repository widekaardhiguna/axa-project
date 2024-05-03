import { GetUserListResponse } from "@/repository"
import { UserList } from "../_UserList"
import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from "vitest"

describe("UserList", () => {
  const users: GetUserListResponse = [
    {
      id: 1,
      name: "John Doe",
      username: "john_doe",
      email: "john@mail.com",
      address: {
        street: "john street",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: "john.com",
      company: { name: "johncompany", catchPhrase: "", bs: "" },
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "jane_smith",
      email: "jane@mail.com",
      address: {
        street: "jane street",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: "jane.com",
      company: { name: "janecompany", catchPhrase: "", bs: "" },
    },
  ]

  it("renders the list of users", () => {
    render(<UserList users={users} />)

    // Assert that the user names are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("Jane Smith")).toBeInTheDocument()
  })

  it("calls onClickSeePosts when 'See Posts' button is clicked", () => {
    const onClickSeePosts = vi.fn()
    render(<UserList users={[users[0]]} onClickSeePosts={onClickSeePosts} />)

    // Simulate a click on the 'See Posts' button for the first user
    const seePostsButton = screen.getByText(/see posts/i)
    fireEvent.click(seePostsButton)

    // Assert that onClickSeePosts is called with the correct user ID
    expect(onClickSeePosts).toHaveBeenCalled()
  })

  it("calls onClickViewAlbums when 'View Albums' button is clicked", () => {
    const onClickViewAlbums = vi.fn()
    render(
      <UserList users={[users[0]]} onClickViewAlbums={onClickViewAlbums} />
    )

    // Simulate a click on the 'View Albums' button for the second user
    const viewAlbumsButton = screen.getByText(/view albums/i)
    fireEvent.click(viewAlbumsButton)

    // Assert that onClickViewAlbums is called with the correct user ID
    expect(onClickViewAlbums).toHaveBeenCalled()
  })
})

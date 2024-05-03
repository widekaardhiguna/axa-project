import { render, screen } from "@testing-library/react"
import { ProfileInfo, ProfileInfoProps } from "../_ProfileInfo"

describe("ProfileInfo", () => {
  const defaultProps: ProfileInfoProps = {
    name: "John Doe",
  }

  it("renders the profile name", () => {
    render(<ProfileInfo {...defaultProps} />)
    const profileName = screen.getByText("John Doe")
    expect(profileName).toBeInTheDocument()
  })
})

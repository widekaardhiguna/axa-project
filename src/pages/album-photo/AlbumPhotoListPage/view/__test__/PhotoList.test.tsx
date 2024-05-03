import { render, screen, fireEvent } from "@testing-library/react"
import { PhotoList, PhotoListProps } from "../_PhotoList"
import { describe, expect, it, vi } from "vitest"
import { GetAlbumPhotoListResponse } from "@/repository"

describe("PhotoList", () => {
  const mockPhotos: GetAlbumPhotoListResponse = [
    {
      id: 1,
      title: "Photo 1",
      url: "https://example.com/photo1.jpg",
      albumId: 1,
      thumbnailUrl: "https://example.com/thumbnail1.jpg",
    },
    {
      id: 2,
      title: "Photo 2",
      url: "https://example.com/photo2.jpg",
      albumId: 1,
      thumbnailUrl: "https://example.com/thumbnail2.jpg",
    },
  ] as const

  const mockOnClickPhoto = vi.fn()

  const renderComponent = (props: Partial<PhotoListProps> = {}) => {
    const defaultProps: PhotoListProps = {
      photos: mockPhotos,
      onClickPhoto: mockOnClickPhoto,
    }

    return render(<PhotoList {...defaultProps} {...props} />)
  }

  it("renders the list of photos", () => {
    renderComponent()

    const photoElements = screen.getAllByRole("img")
    expect(photoElements).toHaveLength(mockPhotos.length)

    mockPhotos.forEach((photo) => {
      const photoElement = screen.getByAltText(photo.title)
      expect(photoElement).toBeInTheDocument()
      expect(photoElement).toHaveAttribute("src", photo.thumbnailUrl)
    })
  })

  it("calls onClickPhoto when a photo is clicked", () => {
    renderComponent()

    const photoElement = screen.getByAltText(mockPhotos[0].title)
    fireEvent.click(photoElement)

    expect(mockOnClickPhoto).toHaveBeenCalledTimes(1)
    expect(mockOnClickPhoto).toHaveBeenCalledWith(mockPhotos[0])
  })
})

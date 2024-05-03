import { act, renderHook } from "@testing-library/react"
import { useAlbumPhotoDialog } from "../useAlbumPhotoDialog"
import { describe, expect, it } from "vitest"

describe("useAlbumPhotoDialog", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useAlbumPhotoDialog())

    expect(result.current.dialogProps.open).toBe(false)
  })

  it("should open the dialog and set the selected photo", () => {
    const { result } = renderHook(() => useAlbumPhotoDialog())

    act(() => {
      result.current.onOpenPhotoDialog({
        id: 1,
        title: "Photo 1",
        url: "https://example.com/photo1.jpg",
        albumId: 1,
        thumbnailUrl: "https://example.com/thumbnail1.jpg",
      })
    })

    expect(result.current.dialogProps.open).toBe(true)
    expect(result.current.dialogProps.title).toEqual("Photo 1")
    expect(result.current.dialogProps.url).toEqual(
      "https://example.com/photo1.jpg"
    )
    expect(result.current.dialogProps.alt).toEqual("Photo 1 image")
  })

  it("should close the dialog ", () => {
    const { result } = renderHook(() => useAlbumPhotoDialog())

    act(() => {
      result.current.onClosePhotoDialog()
    })

    expect(result.current.dialogProps.open).toBe(false)
  })
})

import { Navigate, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import UserListPage from "./pages/user/UserListPage"
import UserAlbumListPage from "./pages/user-album/UserAlbumListPage"
import AlbumPhotoListPage from "./pages/album-photo/AlbumPhotoListPage"
import UserPostListPage from "./pages/user-post/UserPostListPage"
import UserPostDetailPage from "./pages/user-post/UserPostDetailPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace={true} />,
      },
      {
        path: "users",
        element: <UserListPage />,
      },
      {
        path: "users/:userId/albums",
        element: <UserAlbumListPage />,
      },
      {
        path: "users/:userId/albums/:albumId/photos",
        element: <AlbumPhotoListPage />,
      },
      {
        path: "users/:userId/posts",
        element: <UserPostListPage />,
      },
      {
        path: "users/:userId/posts/:postId",
        element: <UserPostDetailPage />,
      },
    ],
  },
])

export default router

import { Button, Container } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"

const MainLayout = () => {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  return (
    <Container sx={{ pt: 8 }}>
      <Button
        startIcon={<KeyboardArrowLeftIcon />}
        onClick={onBack}
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Outlet />
    </Container>
  )
}

export default MainLayout

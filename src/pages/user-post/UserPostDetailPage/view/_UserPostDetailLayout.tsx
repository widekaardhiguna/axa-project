import Box from "@mui/material/Box"
import { Paper, Stack } from "@mui/material"

export type UserPostDetailLayoutProps = {
  top: React.ReactNode
  mid: React.ReactNode
  bottom: React.ReactNode
}

export const UserPostDetailLayout = ({
  bottom,
  mid,
  top,
}: UserPostDetailLayoutProps) => {
  return (
    <>
      {top}
      <Paper sx={{ mt: 1 }}>
        <Stack>{mid}</Stack>
        <Box sx={{ p: 2 }}>{bottom}</Box>
      </Paper>
    </>
  )
}

import Box from "@mui/material/Box"
import { Paper, Stack } from "@mui/material"

export type UserPostListLayoutProps = {
  top: React.ReactNode
  action: React.ReactNode
  bottom: React.ReactNode
}

export const UserPostListLayout = ({
  action,
  bottom,
  top,
}: UserPostListLayoutProps) => {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          mb: 3,
        }}
      >
        {top}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          {action}
        </Box>
      </Paper>
      <Stack spacing={2}>{bottom}</Stack>
    </>
  )
}

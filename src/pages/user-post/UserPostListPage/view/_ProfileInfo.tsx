import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

export type ProfileInfoProps = {
  name?: string
}

export const ProfileInfo = ({ name }: ProfileInfoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Avatar alt={name} sx={{ width: "8rem", height: "8rem" }} />
      <Typography fontSize="1.4rem">{name}</Typography>
    </Box>
  )
}

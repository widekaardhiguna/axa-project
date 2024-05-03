import React from "react"
import BusinessIcon from "@mui/icons-material/Business"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

export type PostCardProps = {
  name?: string
  company?: string
  title?: string
  body?: string
  action?: React.ReactNode
}

export const PostCard = ({
  action,
  body,
  company,
  name,
  title,
}: PostCardProps) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 2 }}>
        <Avatar alt={name} sx={{ width: "4rem", height: "4rem" }} />
        <Box>
          <Typography>{name}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <BusinessIcon /> {company}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
        {action}
      </Box>
    </Paper>
  )
}

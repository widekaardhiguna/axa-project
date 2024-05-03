import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "@tanstack/react-query"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { queryClient } from "./configs/cache.ts"
import { theme } from "./configs/theme.ts"
import { RouterProvider } from "react-router-dom"
import router from "./router.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)

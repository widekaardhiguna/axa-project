import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Because data from API never actually updated, we need to set staleTime to Infinity
      staleTime: Infinity,
    },
  },
})

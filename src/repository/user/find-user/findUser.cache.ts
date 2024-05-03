import { useQuery } from "@tanstack/react-query"
import { findUser } from "./findUser.http"
import { FindUserParams } from "./findUser.types"

export const useFindUser = (params: FindUserParams) => {
  const query = useQuery({
    queryKey: ["find-user", params],
    queryFn: async () => findUser(params),
  })
  return query
}

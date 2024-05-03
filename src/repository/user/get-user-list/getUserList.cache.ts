import { useQuery } from "@tanstack/react-query"
import { getUserList } from "./getUserList.http"

export const useGetUserList = () => {
  const query = useQuery({ queryKey: ["user-list"], queryFn: getUserList })
  return query
}

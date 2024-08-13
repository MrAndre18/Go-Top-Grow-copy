import { useEffect, useState } from "react";
import { useFetching } from "./useFetching";
import PostService from "../API/PostService";

export const useFetchingPostStatused = (
  fetchURL,
  data,
  requirement = true
) => {
  const
    [isResponseReceived, setIsResponseReceived] = useState(null),
    [fetchData, isLoading, error] = useFetching(async () => {
      await PostService.postData(fetchURL, data)
    })

  useEffect(() => {
    requirement && fetchData(data)
  }, [data])

  useEffect(() => {
    isLoading === true && setIsResponseReceived(false)

    if (isLoading === false && isResponseReceived === false)
      setIsResponseReceived(true)
  }, [isLoading])

  return [isLoading, error, isResponseReceived]
}
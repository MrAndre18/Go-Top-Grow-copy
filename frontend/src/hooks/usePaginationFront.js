import { useMemo } from "react"

export const usePaginationFront = (posts, page, limit, showOnlyCurPage = true) => {
  const result = useMemo(() => {
    const
      lastIndex = page * limit,
      firstIndex = showOnlyCurPage ? lastIndex - limit : 0

    return posts.slice(firstIndex, lastIndex)
  }, [posts, page, limit])

  return result
}
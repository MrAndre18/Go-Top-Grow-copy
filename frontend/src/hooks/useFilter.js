import { useMemo } from "react"

export const useSelectedFreeZones = (posts, select) => {
  const selectedPosts = useMemo(() => {
    if (select.emirate) {
      return posts.filter(post =>
        post.emirate.id === select.emirate
      )
    }

    return posts
  }, [posts, select])

  return selectedPosts
}

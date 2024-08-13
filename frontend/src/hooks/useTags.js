import { useMemo } from "react"
import { groupItemsByFirstChar } from "../API/textMethods"

export const useTags = (tags, query) => {
  const searchedTags = useMemo(() => {
    return tags.length ? tags.filter(tag =>
      tag.name.toLowerCase().includes(query.toLowerCase())) : []
  }, [query, tags])

  return groupItemsByFirstChar(searchedTags)
}
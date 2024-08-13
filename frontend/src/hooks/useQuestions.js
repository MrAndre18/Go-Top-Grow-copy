import { useMemo } from "react"

export const useQuestions = (posts, query) => {
  const result = useMemo(() => {
    return posts.filter(post => {
      const
        question = post.question || post.question_ru || '',
        info = post.info || post.info_ru || ''

      if (!question && !info) return

      return (
        question.toLowerCase().includes(query.toLowerCase()) ||
        info.toLowerCase().includes(query.toLowerCase())
      )
    }
    )
  }, [posts, query])

  return result
}
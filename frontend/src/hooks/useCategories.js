import { useEffect, useState } from "react"
import { getCategoriesList, getCurrentCategory, getParentCategory } from "../API/categories"

export const useCategories = (categories, currentCategorySlug) => {
  const
    [currentCategory, setCurrentCategory] = useState([]),
    [parentCategory, setParentCategory] = useState([]),
    [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    setCurrentCategory(getCurrentCategory(categories, currentCategorySlug))
    setParentCategory(getParentCategory(categories, currentCategorySlug))
    setCategoriesList(getCategoriesList(categories, currentCategorySlug))
  }, [categories, currentCategorySlug])

  return [currentCategory, parentCategory, categoriesList]
}
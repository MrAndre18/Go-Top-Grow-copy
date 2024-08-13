import axios from "axios";

export default class PostService {
  static async postData(
    fetchURL,
    data
  ) {
    const response = await axios.post(fetchURL, {
      crossOrigin: true,
      params: data
    })

    return response
  }

  static async getAll(
    fetchURL,
    page = 1,
    search = undefined,
    tags = undefined,
    language
  ) {
    const response = await axios.get(fetchURL, {
      crossOrigin: true,
      params: {
        page: page,
        search: search,
        tags: tags ? tags.join(',') : undefined,
        language: language
      }
    })

    return response
  }

  static async getAllFull(fetchURL, language) {
    const response = await axios.get(fetchURL, {
      crossOrigin: true,
      params: {
        language: language
      }
    })

    return response
  }

  static async getAllFullWithFilters(
    fetchURL,
    search = undefined,
    tags = undefined,
    language
  ) {
    const response = await axios.get(fetchURL, {
      crossOrigin: true,
      params: {
        search: search,
        tags: tags ? tags.join(',') : undefined,
        language: language
      }
    })

    return response
  }

  static async getCategories(fetchURL, language) {
    const response = await axios.get([fetchURL, 'category'].join('/'), {
      crossOrigin: true,
      params: {
        language: language
      }
    })

    return response
  }

  static async getByCategory(
    fetchURL,
    page = 1,
    slug,
    search = undefined,
    // tags = undefined,
    language
  ) {
    const response = await axios.get([fetchURL, 'category', slug].join('/'), {
      crossOrigin: true,
      params: {
        page: page,
        search: search,
        // tags: tags ? tags.join(',') : undefined,
        language: language
      }
    })

    return response
  }

  static async getByCategoryFull(fetchURL, slug, language) {
    const response = await axios.get([fetchURL, 'category', slug].join('/'), {
      crossOrigin: true,
      params: {
        language: language
      }
    })

    return response
  }

  static async getDetailBySlug(fetchURL, slug, language) {
    const response = await axios.get([fetchURL, slug].join('/'), {
      crossOrigin: true,
      params: {
        language: language
      }
    })

    return response
  }
};

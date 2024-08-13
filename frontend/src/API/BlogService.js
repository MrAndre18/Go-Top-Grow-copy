import axios from "axios";
import { WP_API_URL } from "./URLs";

axios.defaults.baseURL = WP_API_URL;

export default class PostService {
  static async getPosts(params) {
    const response = await axios.get('/posts', {
      params: params
    })

    return response
  }

  static async getPostBySlug(slug, params) {
    const response = await axios.get('/posts', {
      params: {
        slug: slug,
        ...params
      }
    })

    return response
  }

  static async getPostById(id, params) {
    const response = await axios.get(`/posts/${id}`, {
      params: params
    })

    return response
  }
}
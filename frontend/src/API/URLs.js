export const SITE_ROOT = window.location.origin;
export const API_ROOT = window.location.origin; // build
// export const API_ROOT = 'http://127.0.0.1:1337'; //dev
// export const API_ROOT = 'https://gotopgrow.com'; //dev
// export const API_ROOT = 'http://192.168.23.78'; //dev
export const API_URL = `${API_ROOT}/api`;

// export const WP_API_URL = 'http://localhost/wordpress/wp-json/wp/v2'; // dev
export const WP_API_URL = 'https://wp.gotopgrow.com/wp-json/wp/v2'; // build

export const fetchUrls = {
  // GET
  laws: `${API_URL}/laws`,
  state: `${API_URL}/state`,
  business: `${API_URL}/business`,
  tags: `${API_URL}/tags`,
  search: `${API_URL}/search`,
  faq: `${API_URL}/faq`,

  // POST
  contact: `${API_URL}/contact/`,
}
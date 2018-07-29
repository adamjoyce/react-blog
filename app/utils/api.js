const site = 'atorpidpumpkin.wordpress.com';
const postsPerPage = 100;

/**
 * Fetch all the blog posts from the WordPress blog.
 * @returns {object} A JSON representation of all blog posts.
 */
export async function getPosts() {
  const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${site}/posts/?per_page=${postsPerPage}`);
  return response.json();
}

/**
 * Fetches a list of all blog post categories.
 * @returns {object} A JSON representations of all blog categories.
 */
export async function getCategories() {
  const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/${site}/categories`);
  return response.json();
}

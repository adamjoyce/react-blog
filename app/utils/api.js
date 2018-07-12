const site = 'atorpidpumpkin.wordpress.com';

/**
 * Fetch all the blog posts from the WordPress blog.
 * @returns {object} A JSON representation of all blog posts.
 */
export async function getPosts() {
  const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts/`);
  return response.json();
}

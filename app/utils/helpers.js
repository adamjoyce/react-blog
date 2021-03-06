import converter from 'color-convert';

// Maps numerical month dates to short month names.
const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

/**
 * Converts an ISO formatted date to 'Day Month Year' format e.g. '1 Jan 2000'.
 *
 * @param {string} ISO formatted date.
 * @returns {string} Formatted date e.g. '01 Jan 2000'.
 */
export function formatDate(date) {
  const year = date.substring(0, 4);
  const day = date.substring(8, 10);
  let month = date.substring(5, 7);

  // Convert numercial month to month name.
  month = months[month];

  return `${day} ${month} ${year}`;
}

/**
 * Reduces the luminosity of a given color.
 *
 * @param {string} The color to reduce as a hex value.
 * @return {string} The reduced luminosity color in hsl format.
 */
export function reduceLuminosity(hexColor, luminosityMultipler) {
  // Convert from hex to hsl.
  let hslColor = converter.hex.hsl(hexColor.substring(1));

  // Reduce the luminosity.
  hslColor[2] = hslColor[2] * luminosityMultipler;

  // Format hsl string for css use.
  const result = `hsl(${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%)`;
  return result;
}

/**
 * Converts a hex color into an rgba color.
 *
 * @param {string} The color as a hex value.
 * @param {number} The new rgb color's alpha value.
 * @return {string} The final rgba color formatted for css use.
 */
 export function reduceAlpha(hexColor, alphaValue) {
   // Convert from hex to rbg.
   let rgbaColor = converter.hex.rgb(hexColor.substring(1));

   // Add the alpha value.
   rgbaColor.push(alphaValue);

   // Format rgba string for css use.
   const result =
     `rgba(${rgbaColor[0]}, ${rgbaColor[1]}, ${rgbaColor[2]}, ${rgbaColor[3]})`;
   return result;
 }

/**
 * Strips out all script tags from some given text.
 *
 * @param {string} Text from which HTML should be stripped.
 * @return {string} The stripped text wrapped in a div.
 */
export function stripDangerousHTML(text) {
  // Create an element for querying.
  let div = document.createElement('div');
  div.innerHTML = text;

  // Strip all the tags.
  let tags = div.querySelectorAll('scripts');
  for (let i = 0; i < tags.length; ++i) {
    tags[i].parentNode.removeChild(tags[i]);
  }

  return div;
}

/**
 * Returns an array of the given array split into smaller 'chunk' arrays.
 *
 * @param {array} The original array to be chunked.
 * @param {number} The size of each array chunk.
 * @return {array} The resultant chunked array.
 */
export function chunkArray(array, chunkSize) {
  const arrayLength = array.length;
  let chunkedArray = [];

  for (let i = 0; i < arrayLength; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}

/**
 * Matches the given category id with its associated name.
 *
 * @param {number} The category id whose name is wanted.
 * @param {array} The array of possible categories.
 * @return {string} The matched category name.
 */
export function getCategoryName(categoryId, categories) {
  let categoryName = '';
  for (let i = 0; i < categories.length; ++i) {
    if (categories[i].id === categoryId) {
      categoryName = categories[i].name;
      break;
    }
  }
  return categoryName;
}

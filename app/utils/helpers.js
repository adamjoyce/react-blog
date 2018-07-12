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
 * @param {string} ISO formatted date.
 * @returns {string} Formatted date e.g. '01 Jan 2000'.
 */
export function formatDate(date) {
  const year = date.substring(0, 4);
  const day = date.substring(5, 7);
  let month = date.substring(8, 10);

  // Convert numercial month to month name.
  month = months[month];

  return `${day} ${month} ${year}`;
}

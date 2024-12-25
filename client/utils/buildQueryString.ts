type Filters = { [key: string]: string | undefined };

/**
 * Builds a query string for API requests.
 * @param filters - An object containing filter keys and values.
 * @param page - The current page number.
 * @param limit - The number of results per page.
 * @returns A query string to be appended to a URL.
 */
const buildQueryString = (
  filters: Filters,
  page: number,
  limit: number
): string => {
  // Filter the input object to only include valid filter keys and values
  const activeFilters = Object.entries(filters).reduce((acc, [key, value]) => {
    if (value) {
      // If the key is "estado", use it directly
      // (If we use “_like” at this point, the “active” status is inside “inactive”)
      if (key === "estado") {
        acc[key] = value;
      } else {
        // For other keys, append "_like" for search functionality
        acc[key + "_like"] = value;
      }
    }
    return acc;
  }, {} as { [key: string]: string });

  // Create the query string including pagination, limit and active filters
  const queryString = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString(),
    ...activeFilters,
  }).toString();

  return queryString;
};

export default buildQueryString;

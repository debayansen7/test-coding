/**
 * Function to fetch Data from API
 * @returns festival data array of object
 */
export const fetchData = async () => {
  const apiUrl =
    "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";
  return await fetch(apiUrl, {
    method: "GET",
    mode: "no-cors",
    header: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://eacp.energyaustralia.com.au",
    },
  })
    .then((response) => {
      return response.text();
    })
};
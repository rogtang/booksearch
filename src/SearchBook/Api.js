const googleApiUrl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyCWz-P6hTzQdOTwr5pmULTVD764xGuwdLM";

export function getBooks(params) {
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
  const urlSearch = `${googleApiUrl}?${queryString}&key=${apiKey}`;
  return fetch(urlSearch, { method: "GET" })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong, please try again later");
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err); // logging
      throw err;
    });
}

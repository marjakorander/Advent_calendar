const apiKey = "seYUer2bPoJZHvH7soSy12u5ynQXIYbT";

function getGiphyUrl(category) {
  return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=G&tag=${category}`;
}

function fetchGiph(category) {
  category = category.replace(/ /g, "+");
  return fetch(getGiphyUrl(category))
    .then(response => response.json())
    .then(json => json.data.image_url);
}

export default fetchGiph;
